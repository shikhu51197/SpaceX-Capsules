import React, { useEffect, useState } from "react";
import { getdataData } from "../../redux/AppContext/action.js";
import { useSelector, useDispatch } from "react-redux";
import ProductDetailsPopup from "../Singleproduct/ProductDetailsPopup.jsx";

const Datagrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLaunchDate, setSelectedLaunchDate] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.dataReducer.productdata);
  console.log("jj", productdata);

  useEffect(() => {
    dispatch(
      getdataData(selectedStatus, selectedLaunchDate, selectedType, currentPage)
    );
  }, [selectedStatus, selectedLaunchDate, selectedType, currentPage]);

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      await dispatch(
        getdataData(selectedStatus, selectedLaunchDate, selectedType)
      );
      // console.log(selectedStatus)
      // dispatch(Datafunc())
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="border bg-opacity-15 bg-black w-full p-8 md:p-12">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto"
        >
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700">Status:</label>
            <input
              type="text"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700">Launch Date:</label>
            <input
              type="text"
              value={selectedLaunchDate}
              onChange={(e) => setSelectedLaunchDate(e.target.value)}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700">Type:</label>
            <input
              type="text"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          <div className="flex items-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Capsules Data</h1>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {productdata && productdata.length > 0 ? (
            productdata.map((product) => (
              <div
                key={product.capsule_serial}
                className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              >
                <button onClick={() => openPopup(product)}>
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.KtYd8FbJbH4L72FF6JA7zQHaE7&pid=Api&P=0&h=180"
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                </button>
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Capsule Id:- {product.capsule_id}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.status}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {product.type}
                    </p>
                    <div>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        {product.original_launch}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </section>

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-l cursor-pointer"
          >
            Prev
          </button>
          <span className="px-4 py-2 bg-gray-300 text-gray-600">
            {currentPage}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={productdata.length < 10}
            className={`px-4 py-2 bg-gray-300 text-gray-600 rounded-r cursor-pointer ${
              productdata.length < 10
                ? "cursor-not-allowed"
                : "hover:bg-gray-400"
            }`}
          >
            Next
          </button>
        </div>
        {selectedProduct && (
          <ProductDetailsPopup product={selectedProduct} onClose={closePopup} />
        )}
      </div>
    </>
  );
};

export default Datagrid;
