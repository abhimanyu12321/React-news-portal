// src/pages/Article.jsx
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchArticleById } from "../utils/api";
import Layout from "../components/Layout";

export default function Article() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(
    ["article", id],
    () => fetchArticleById(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading article</p>;

  return (
    <Layout>
      <div className="bg-white rounded shadow p-4">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <img
          src={data.urlToImage}
          alt={data.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-700">{data.content}</p>
      </div>
    </Layout>
  );
}
