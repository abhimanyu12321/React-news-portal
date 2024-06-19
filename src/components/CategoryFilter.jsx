/* eslint-disable react/prop-types */
// src/components/CategoryFilter.jsx
const categories = ["general", "business", "technology", "entertainment"];

export default function CategoryFilter({ setCategory }) {
  return (
    <div className="flex justify-center my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className="bg-blue-600 text-white px-4 py-2 rounded mx-2"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
