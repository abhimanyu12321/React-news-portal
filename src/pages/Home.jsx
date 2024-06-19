// src/pages/Home.jsx
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchArticles } from "../utils/api";
import Layout from "../components/Layout";
import ArticleList from "../components/ArticleList";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

export default function Home() {
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useQuery(
    ["articles", category, page],
    () => fetchArticles(category, page)
  );

  return (
    <Layout>
      <CategoryFilter setCategory={setCategory} />
      {isLoading ? (
        <p className="text-center text-2xl font-bold mt-36">Loading...</p>
      ) : error ? (
        <p className="text-center text-2xl font-bold mt-36">
          Error loading articles
        </p>
      ) : (
        <>
          <ArticleList articles={data.articles} />
          <Pagination currentPage={page} setPage={setPage} />
        </>
      )}
    </Layout>
  );
}
