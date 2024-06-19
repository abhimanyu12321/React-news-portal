/* eslint-disable react/prop-types */
// src/components/ArticleList.jsx
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleItem key={article.url} article={article} />
      ))}
    </div>
  );
}
