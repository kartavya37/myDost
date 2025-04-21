import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://api.mediastack.com/v1/news?countries=in&access_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setNews(data.data); // data.data is a array
                console.log(data.data)
                setLoading(false);
            })
            .catch(error => {
                console.error("error =>  ", error);
                setLoading(false);
            });
    }, []);

    return (
        <NewsContext.Provider 
            value={{ news, loading }}>
            {children}
        </NewsContext.Provider>
    );
};