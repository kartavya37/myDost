import React, { useContext } from "react";
import { NewsContext } from "../store/NewsContext";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const { news, loading } = useContext(NewsContext);

    if (loading) { // loading === true
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!news.length) { // loading.length === 0
        return <p className="text-center">No news available.</p>;
    }

    return (
        <div className="row g-4">
            {news.map((article, idx) => (
                <div key={idx} className="col-12">
                    <NewsItem article={article} />
                </div>
            ))}
        </div>
    );
};

export default NewsList;