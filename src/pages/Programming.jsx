import React, { useState, useEffect } from "react";
import CardNew from "../components/molecules/CardNew";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Skeleton from "../components/molecules/Skeleton";

const ProgrammingNews = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 6;
  const pageCount = Math.ceil(news.length / perPage);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=programming&apiKey=353827dfec9148f8ab42adde79913cd7`)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const offset = currentPage * perPage;
  const currentPageData = news.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <h1 className="text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 mt-10">PROGRAMMING NEWS</h1>

      <div className="container h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
        <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
          {loading ? (
            <div className="flex space-x-5">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              {currentPageData.map((item, key) => (
                <CardNew title={item.title} img={item.urlToImage} author={item.author} source={item.source.name} desc={item.description} key={key} />
              ))}
            </>
          )}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active bg-blue_color border-none text-white_color"}
        className="flex justify-center space-x-5 mt-6 flex-wrap w-full"
        previousClassName="flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color border-2 border-gray_color"
        nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color"
        pageClassName="border-2 border-gray_color flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text-black mb-4"
      />
    </div>
  );
};

export default ProgrammingNews;
