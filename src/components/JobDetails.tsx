import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "./../image/icon.png";
import icon_three_rounds from "./../image/icon_three_rounds.png";
import Home from "./Map";
import { RootState } from "../store/store";

const JobDetails = (props: any) => {
  const list = useSelector((state: RootState) => state.list.list);
  return (
    <div className="bg-white bg-none h-[1700px] sm:h-[2310px] ">
      {list.map((list) => (
        <div className="bg-white sm:h-[2310px] sm:w-[414px] sm:bg-white sm:mx-[15px]">
          <div key={list.id} className="flex ml-60 mr-2/3 sm:m-0">
            <div className="m-auto mt-5 sm:w-[363px] sm:mx-[15px]">
              <div className="flex justify-between mb-4 sm:flex-col sm:mb-[32px]">
                <div>
                  <h1 className="font-bold text-gray-600 text-3xl sm:mb-[12px]">
                    Job Details
                  </h1>
                  <hr className="lg:hidden sm:w-[360px]" />
                </div>
                <div className="flex mt-2">
                  <img
                    src={icon}
                    alt="Icon"
                    className="h-5 w-4 opacity-60 mr-3 mt-1"
                  />
                  <span className="text-gray-800 text-lg mr-10">
                    Save to my list
                  </span>
                  <img
                    src={icon_three_rounds}
                    alt="Icon Three Rounds"
                    className="h-5 w-4 opacity-60 mr-3 mt-1"
                  />
                  <span className="text-gray-800 text-lg">Share</span>
                </div>
              </div>
              <hr className="w-[723px] sm:hidden" />
              <button className="my-10 h-14 w-36 border-gray-700 text-xs rounded-lg border bg-gray-700 text-white sm:hidden">
                APPLY NOW
              </button>
              <div className="flex justify-between mb-3 sm:w-[363px] sm:mb-[5px]">
                <h1 className="font-medium text-gray-700 text-2xl w-8/12 sm:w-[363px] ">
                  {list.title}
                </h1>
                <div className="w-1/3 sm:hidden">
                  <h1 className="font-medium text-end text-gray-700 text-xl">
                    &#8364; {list.salary.replace(/k/g, " 000")}
                  </h1>
                  <p className="text-gray-700 ml-[41%]">Brutto, per year</p>
                </div>
              </div>

              <div className="mb-3 sm:w-[384px] sm:flex sm: justify-between sm:mt-[32px] sm:mb-[14px]">
                <p className="text-slate-400 text-lg">
                  Posted{" "}
                  {new Date(list.createdAt).getDate() === 1
                    ? new Date(list.createdAt).getDate() + " " + "day"
                    : new Date(list.createdAt).getDate() + " " + "days"}{" "}
                  ago
                </p>
                <div className="sm:flex sm:flex-col-reverse sm:h-[40px] sm:pt-[5px] sm:mr-[15px] lg:hidden">
                  <h1 className="font-medium text-end text-gray-700 text-xl sm:font-bold">
                    &#8364; {list.salary.replace(/k/g, " 000")}
                  </h1>
                  <p className="text-gray-700 ml-[41%] sm:w-[125px] sm:text-lg sm:ml-7 sm:text-gray-500 ">
                    Brutto, per year
                  </p>
                </div>
              </div>
              <span className="mb-6 text-gray-700 text-lg ">
                {list.description
                  .split("Responsopilities")[0]
                  .split("/n")
                  .map((el) => (
                    <p key={el.toString()} className="sm:pb-[43px]">
                      {el}
                    </p>
                  ))}
              </span>
              <div>
                <h2 className="font-medium text-gray-700 text-xl mb-2">
                  Responsopilities
                </h2>
                <span className="text-gray-700 mb-6 text-lg ">
                  {list.description
                    .split("Responsopilities:")[1]
                    .split("Compensation & Benefits:")[0]
                    .split("/n")
                    .map((el) => (
                      <p key={el.toString()}>{el}</p>
                    ))}
                </span>
                <h2 className="font-medium text-gray-700 text-xl mb-2 sm:mt-[15px] sm:mb-[25px]">
                  Compensation & Benefits:
                </h2>

                <ul className="list-disc text-gray-700 mb-6 text-lg">
                  Our physicians enjoy a wide range of benefits, including:
                  {list.description
                    .split("Compensation & Benefits:")[1]
                    .slice(0, -3)
                    .split(".")
                    .map((el) => (
                      <li key={el.toString()}>{el}</li>
                    ))}
                </ul>
              </div>
              <button className="mt-6 mb-12 h-14 w-36 border-gray-700 text-xs rounded-lg border bg-gray-700 text-white sm:mt-[25px] sm:mb-[135px] sm:ml-[30%]">
                APPLY NOW
              </button>
              <div className="sm:flex sm:flex-col-reverse sm:mb-[63px]">
                <div className="sm:w-[390px] sm:h-[370px] lg:hidden">
                  <Home />
                </div>
                <div className="mb-2">
                  <h2 className="font-medium text-gray-700 text-lg">
                    Additional info
                  </h2>
                  <hr className="w-[701px] mb-[15px] sm:w-[290px]" />
                  <div className="mb-[23px]">
                    <h3 className="text-lg text-gray-800 mb-[10px] font-sans:Roboto">
                      Employment type
                    </h3>
                    <div className="flex flex-row">
                      {list.employment_type.map((el) => (
                        <button
                          key={el.toString()}
                          className="w-[222px] h-[49px] border bg-slate-300 rounded-lg text-blue-900 mr-[8px] text-base"
                        >
                          {el}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800 mb-[10px] font-sans:Roboto">
                      Benefits
                    </h3>
                  </div>
                  <div className="flex flex-row mb-[87px]">
                    {list.benefits.map((el) => (
                      <button
                        key={el.toString()}
                        className="w-[220px] h-[50px] border bg-amber-100 border-yellow-400 rounded-lg text-yellow-700 mr-[8px] text-base"
                      >
                        {el}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <h2 className="font-medium text-gray-700 text-lg">
                    Attached images
                  </h2>
                  <hr className="w-[701px] mb-[16px] sm:w-[360px]" />
                  <div className="flex w-[660px] sm:w-[590px] sm:mb-[55px] sm:overflow-hidden">
                    {list.pictures.map((el) => (
                      <div className="mr-[19px]">
                        <img
                          key={el.toString()}
                          src={el}
                          alt="Picture"
                          className="w-[200px] h-[133px] rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[100px] mr-[315px] mt-[26px] sm:hidden">
              <Home />
            </div>
          </div>
          <div className="mt-[89px] mb-[162px] ml-[150px] w-[213px] h-[50px] mb-[162px] rounded-lg bg-slate-300 sm:hidden ">
            <button className="mr-[19px] pl-[23px] pt-3 w-2.5 h-[18px] ">
              &#10094;
            </button>
            <Link
              to={"/"}
              className="text-sky-900 text-xs text-center font-bold pt-[18px] pb-[16px] pr-[26px] "
            >
              RETURN TO JOB BOARD{" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
