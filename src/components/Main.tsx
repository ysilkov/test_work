import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, addSubscribe, getList } from "./store/listReducer";
import { AppDispatch } from "./store/store";
import icon from "./../image/icon.png";
import location from "./../image/location.png";
import star from "./../image/star.png";
import iconChange from "./../image/iconChange.png";
import usePagination from "./hook/usePagination";
import { RootState } from "./store/store";
import { Link } from "react-router-dom";

const Main = () => {
  const lists = useSelector((state: RootState) => state.list.lists);
  const dispatch = useDispatch<AppDispatch>();
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: lists.length,
  });
  useEffect(() => {
    dispatch(getList());
  }, []);
  const getSubscribe = (id: string) => {
    dispatch(addSubscribe(id));
  };
  const getJobId = (id: string) => {
    dispatch(addList(id));
  };
  return (
    <div className="sm:w-full bg-slat-100 flex flex-col w-2/3 m-auto mt-4 mb-2">
      {lists.length === 0 ? (
        <div className="sm:text-center text-center">Loading....</div>
      ) : (
        <div>
          {lists.slice(firstContentIndex, lastContentIndex).map((list) => (
            <ul
              key={list.id}
              className="sm:bg-slate-100 sm:last:mb-5 sm:border-slate-200 border-2 border-white bg-white mt-2 rounded-xl h-34"
            >
              <div className="lg:hidden sm:flex mt-2">
                <div className="sm:flex sm:h-3 sm:w-3 sm:opacity-50 ml-[21%]">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                </div>
                <p className=" text-slate-400 mr-2 sm:ml-[35%]">
                  Posted{" "}
                  {new Date(list.createdAt).getDate() === 1
                    ? new Date(list.createdAt).getDate() + " " + "day"
                    : new Date(list.createdAt).getDate() + " " + "days"}{" "}
                  ago
                </p>
              </div>
              <div className="flex">
                <div className="flex-none">
                  <img
                    src={list.pictures[0]}
                    alt="Logo"
                    className="w-14 h-14 flex-none m-4 rounded-full bg-slate-100"
                  />
                </div>
                <div className="flex-initial w-full">
                  <div className="flex flex-row justify-between">
                    <Link
                      to={`/list/:id`}
                      onClick={() => getJobId(list.id)}
                      className="py-2 w-2/3 cursor-pointer"
                    >
                      {list.title}
                    </Link>
                    <img
                      src={list.subscribe ? iconChange : icon}
                      onClick={() => getSubscribe(list.id)}
                      className="sm:opacity-0 w-4 h-4 mr-5 mt-3 cursor-pointer bg-none"
                    />
                  </div>
                  <p className="text-slate-400 pb-1">
                    Department name &#183; Allgeimeines Krankenhaus der Stadt
                    Wien &#183; {list.name}
                  </p>
                  <div className="flex flex-row justify-between ">
                    <div className="flex">
                      <img src={location} className="h-4 w-4 mt-0.5 pr-0.5" />
                      <p className="text-slate-400 pb-2 pl-1">{list.address}</p>
                    </div>
                    <p className=" text-slate-400 w-[16%] mr-2 sm:hidden">
                      Posted{" "}
                      {new Date(list.createdAt).getDate() === 1
                        ? new Date(list.createdAt).getDate() + " " + "day"
                        : new Date(list.createdAt).getDate() +
                          " " +
                          "days"}{" "}
                      ago
                    </p>
                  </div>
                </div>
              </div>
            </ul>
          ))}
          <div className="static w-3/12 h-8 bg-white rounded-xl bottom-0 left-[40%] mt-2 m-auto pt-1 text-base flex justify-between px-6 sm:w-full sm:left-[0%]">
            <div className="flex">
              <button
                onClick={prevPage}
                className={`text-slate-300 font-bold sm:hidden ${
                  page === 1 && "disabled"
                }`}
              >
                &#10094;
              </button>
              <span className="text-slate-200 pl-5 leading-none text-2xl sm:hidden">
                &#10072;
              </span>
            </div>
            <button
              onClick={() => setPage(1)}
              className={`text-slate-400 font-bold ${
                page === 1 && "decoration-blue-300 underline text-blue-300"
              }`}
            >
              1
            </button>
            {gaps.before ? "..." : null}
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`text-slate-400 font-bold ${
                  page === el
                    ? "decoration-blue-300 underline text-blue-300"
                    : ""
                }`}
              >
                {el}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`text-slate-400 font-bold ${
                page === totalPages &&
                "text-blue-300 underline decoration-blue-300"
              }`}
            >
              {totalPages}
            </button>
            <div className="flex">
              <span className="text-slate-200 pr-5 leading-none text-2xl sm:hidden">
                &#10072;
              </span>
              <button
                onClick={nextPage}
                className={`text-slate-300 font-bold sm:hidden ${
                  page === totalPages && "disabled"
                }`}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Main;
