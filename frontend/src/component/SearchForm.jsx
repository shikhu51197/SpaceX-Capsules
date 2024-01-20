import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLaunchDate, setSelectedLaunchDate] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      status: selectedStatus,
      original_launch: selectedLaunchDate,
      type: selectedType,
    };
    onSearch(searchParams);
  };

  return (
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
        >
          Search
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default SearchForm;
