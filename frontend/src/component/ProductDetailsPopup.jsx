import React from "react";

const ProductDetailsPopup = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Each Capsules Details</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <p>Capsule Id: {product.capsule_serial}</p>
            <p>landings: {product.landings}</p>
            <p>details: {product.details}</p>
            <p>original_launch_unix: {product.original_launch_unix}</p>
            <p>Reuse_count: {product.reuse_count}</p>
            <p>
              Missions:{" "}
              {product.missions.map((mission) => mission.name).join(", ")}
            </p>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
