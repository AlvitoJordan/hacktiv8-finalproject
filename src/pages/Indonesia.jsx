import React, { useEffect, useState } from "react";
import axios from "axios";

function IndonesiaNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=353827dfec9148f8ab42adde79913cd7`)
        .then((response) => {
            setNews(response.data.articles);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {news.map((article, key) => (
                <div key={key}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} alt={article.title} />
                    <p>
                        {article.author} | {article.source.name}
                    </p>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        News Page
                    </a>
                    <p>Save</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default IndonesiaNews;
