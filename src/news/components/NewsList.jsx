import React, { useContext } from "react";
import { NewsContext } from "../store/NewsContext";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const { news, loading, err } = useContext(NewsContext);

  if (loading) { // if loading === true return a spinner
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (err) {
    return (<div className="text-center text-red-500 p-4">Error: {err} </div>);
  }

  if (!news || news.length === 0) {  // if length === 0 return a "No news"
    return <p className="text-center text-gray-400">No news available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, idx) => (
        <NewsItem key={idx} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
