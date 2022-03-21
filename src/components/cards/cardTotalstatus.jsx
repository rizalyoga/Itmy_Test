import React from "react";
import { BsCircleFill } from "react-icons/bs";
import Chart from "../charts/chart";

const CardTotalStatus = () => {
  return (
    <div className="wraper pt-5">
      <div className=" bg-white w-full neuro h-36 rounded-lg flex ">
        <div className="list-status w-5/12 bg-blue-500 h-full flex items-center justify-center">
          <ul className="mx-1">
            <li className=" text-success font-bold text-md flex items-center">
              <BsCircleFill className="mr-1" /> Active
            </li>
            <li className=" text-review font-bold text-md flex items-center">
              <BsCircleFill className="mr-1" /> In Review
            </li>
            <li className=" text-fail font-bold text-md flex items-center">
              <BsCircleFill className="mr-1" />
              Rejected
            </li>
          </ul>
        </div>
        <div className="charts-status w-7/12 -mt-2  flex justify-center self-center items-center">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default CardTotalStatus;
