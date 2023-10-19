import React, { useEffect, useState } from "react";
import axios from "axios";

function CovidNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=covid-19&apiKey=353827dfec9148f8ab42adde79913cd7`)
        .then((response) => {
            setNews(response.data.articles);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="border-b-4 text-center mx-5 text-text_color font-bold text-[50px] border-line_color">COVID-19 NEWS</h1>
                <div className="grid grid-cols-3 place-items-center">
                    {news.map((article, key) => (
                        <div className="max-w-md rounded shadow-box_item p-4 flex flex-col" key={key}>
                        <div className="flex-grow">
                            <div className="font-bold mb-2 text-[30px]">{article.title}</div>
                            {article.urlToImage ? (<img className="w-full h-48 object-cover rounded-md" src={article.urlToImage} alt={article.title}/>) : 
                            (<div className="w-full h-48 rounded-md" style={{ background: "#C4C4C4", borderRadius: "5px" }}></div>)}
                            <p>
                            {article.author} | {article.source.name}
                            </p>
                            <p className="text-gray-700 text-base">{article.description}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <a
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            News Page
                            </a>
                            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
                            Save
                            </button>
                        </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CovidNews;
