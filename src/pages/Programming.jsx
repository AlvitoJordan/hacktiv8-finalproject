import React, {useState, useEffect} from "react";
import CardNew from "../components/molecules/CardNew";
import axios from "axios";

const ProgrammingNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
      axios.get(`https://newsapi.org/v2/everything?q=programming-19&apiKey=353827dfec9148f8ab42adde79913cd7`)
      .then((response) => {
          setNews(response.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 mt-10">Programming NEWS</h1>
      <div className="container h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
        <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
          {news.map((item, key) => (
            <CardNew
              title={item.title}
              img={item.urlToImage}
              author={item.author}
              source={item.source.name}
              desc={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingNews;
