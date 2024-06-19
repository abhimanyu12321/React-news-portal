/* eslint-disable react/prop-types */
// src/components/Pagination.jsx
export default function Pagination({ currentPage, setPage }) {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-l disabled:bg-gray-200"
      >
        Previous
      </button>
      <span className="bg-white text-gray-800 px-4 py-2">
        Page {currentPage}
      </span>
      <button
        onClick={() => setPage(currentPage + 1)}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-r"
      >
        Next
      </button>
    </div>
  );
}
