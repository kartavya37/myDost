import React from "react";

const NewsItem = ({ article }) => {
    return (
        <div className="card">

            {article.image && (<img src={article.image} className="w-full h-auto object-cover max-h-full" alt={article.title} /> )}
            
            <div className="card-body">

                <h5 className="card-title">{article.title}</h5>
                <p className="card-text text-muted">{article.description}</p>

                <div className="d-flex justify-content-between align-items-center">

                    {/* <small className="text-muted"> {new Date(article.published_at).toLocaleDateString()} </small> */}
                    <small className="text-muted"> {new Date(article.published_at).toLocaleString()} </small>

                    <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer"> Read More </a>

                </div>
            </div>
        </div>
    );
};

export default NewsItem;