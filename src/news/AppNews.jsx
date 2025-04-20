import React from "react";
import { NewsProvider } from "./store/NewsContext";
import NewsList from "./components/NewsList";

const AppNews = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <NewsProvider>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-center text-4xl font-bold text-red-400 mb-10">
            Top 25 News
          </h1>
          <NewsList />
        </div>
      </NewsProvider>
    </div>
  );
};

export default AppNews;
