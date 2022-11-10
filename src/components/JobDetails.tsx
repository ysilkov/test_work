import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store/store";
import icon from "./../image/icon.png";
import icon_three_rounds from "./../image/icon_three_rounds.png";
import { RootState } from "./store/store";

const JobDetails = () => {
  const list = useSelector((state: RootState) => state.list.list);
  const dispatch = useDispatch<AppDispatch>();
  console.log(list);
  return (
    <div className="bg-white bg-none">
      {list.map((list) => (
        <div key={list.id} className="flex justify-between">
          <div className="w-2/4 m-auto mt-5">
            <div className="flex justify-between mb-4">
              <div>
                <h1 className="font-bold text-gray-600 text-2xl">Job Details</h1>
              </div>
              <div className="flex">
                <img src={icon} alt="Icon" className="h-5 w-5 opacity-60 mr-3 mt-1" />
                <span className="text-gray-800 text-lg mr-10">Save to my list</span>
                <img
                  src={icon_three_rounds}
                  alt="Icon Three Rounds"
                  className="h-5 w-5 opacity-60 mr-3 mt-1"
                />
                <span className="text-gray-800 text-lg">Share</span>
              </div>
            </div>
            <hr />
            <button className="my-10 h-14 w-36 border-gray-700 text-xs rounded-xl border bg-gray-700 text-white">APPLY NOW</button>
          <div className="flex justify-between mb-3">
            <h1 className="font-medium text-gray-700 text-xl w-8/12">{list.title}</h1>
            <div className="w-1/3 ">
                <h1 className="font-medium text-end text-gray-700 text-xl">&#8364; {list.salary.replace(/k/g, " 000")}</h1>
                <p className="text-gray-700 ml-[42%]">Brutto, per year</p>
            </div>
          </div>
            <div className="mb-3">
            <p className="text-slate-400">
                      Posted{" "}
                      {new Date(list.createdAt).getDate() === 1
                        ? new Date(list.createdAt).getDate() + " " + "day"
                        : new Date(list.createdAt).getDate() +
                          " " +
                          "days"}{" "}
                      ago
                    </p>
            </div>
            <p className="mb-6 text-gray-700">{list.description.split("Responsopilities")[0].split("/n").map((el)=>(
                <p>{el}</p>
            ))}</p>
            <div>
            <h2 className="font-medium text-gray-700 text-xl mb-2">Responsopilities</h2>
            <p className="text-gray-700 mb-6">{list.description.split("Responsopilities:")[1].split("Compensation & Benefits:")[0].split("/n").map((el)=>(
                <p>{el}</p>))}</p>
            <h2 className="font-medium text-gray-700 text-xl mb-2">Compensation & Benefits:</h2>
            <p className="text-gray-700 mb-6">Our physicians enjoy a wide range of benefits, including:
            <ul className="list-disc">
                {list.description.split("Compensation & Benefits:")[1].slice(0,-3).split(".").map((el)=>(
                    <li>{el}</li>
                ))}
            </ul>
            </p>
            </div>
          </div>
          <div className="w-2/12">map</div>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
