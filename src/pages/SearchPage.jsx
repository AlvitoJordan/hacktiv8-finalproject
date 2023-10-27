import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Skeleton, CardNew } from "../components/molecules";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { useParams } from "react-router-dom";
import { saveNews, unsaveNews } from "../redux/saved/NewsSaved";

const SearchNews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const { loading, news } = useSelector((state) => state.getAPI);
  const { newsSaved } = useSelector((state) => state.savedNews);
  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 6;
  const pageCount = Math.ceil(news.length / perPage);
  const { searchValue } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAPIAct(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=986b58a706474d7db834e1090fba267f`));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const offset = currentPage * perPage;
  const currentPageData = news.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleSave = (selected) => {
    const isAlreadySaved = newsSaved.some((item) => item.title === selected.title);
    if (isAlreadySaved) {
      dispatch(unsaveNews(selected));
    } else {
      dispatch(saveNews(selected));
    }
  };

  return (
    <div className="bg-bg_color px-[70px] max-[1000px]:px-[20px] h-auto justify-center items-center flex lg:pt-24 pt-14">
      <div className="max-w-[1800px] w-full h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
        <h1 className="text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 max-[1000px]:text-3xl">{searchValue.toUpperCase()} NEWS</h1>
        <div className="container h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
          <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
            {loading ? (
              <div className="flex lg:space-x-5">
                <Skeleton />
                <Skeleton className={"hidden lg:block"} />
                <Skeleton className={"hidden lg:block"} />
              </div>
            ) : (
              <>
                {currentPageData.map((item, key) => (
                  <CardNew
                    title={item.title}
                    img={item.urlToImage}
                    author={item.author}
                    source={item.source.name}
                    desc={item.description}
                    linkNews={item.url}
                    onClick={() => handleSave(item)}
                    isSaved={newsSaved.some((news) => news.title === item.title)}
                    key={key}
                  />
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
    </div>
  );
};

export default SearchNews;
