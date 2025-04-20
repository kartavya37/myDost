import React from "react";
import { NewsProvider } from "./store/NewsContext";
import NewsList from "./components/NewsList";

const AppNews = () => {
    return (
        <NewsProvider>
            <div className="container py-4">
                <h1 className="text-center mb-4"> Top 25 News </h1>
                <NewsList />
            </div>
        </NewsProvider>
    );
};

export default AppNews;