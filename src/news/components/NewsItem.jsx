import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {article.image && ( <img src={article.image} alt={article.title} className="w-full h-60 object-cover"/> )} {/* image */}

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-white">{article.title}</h2> {/* title */}

        <p className="text-gray-400 text-sm">{article.description}</p> {/* description */}

        <div className="flex justify-between items-center mt-4 text-sm">
          <span className="text-gray-500">
            {new Date(article.published_at).toLocaleString()} {/* time when news was published */}
          </span>

          <a href={article.url} target="_blank" rel="noopener noreferrer" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-all"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
