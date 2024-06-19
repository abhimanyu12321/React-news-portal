/* eslint-disable react/prop-types */
// src/components/ArticleItem.jsx
import { Link } from "react-router-dom";

export default function ArticleItem({ article }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-700">{article.description}</p>
      <Link to={`/article/${article.url}`} className="text-blue-600">
        Read more
      </Link>
    </div>
  );
}
