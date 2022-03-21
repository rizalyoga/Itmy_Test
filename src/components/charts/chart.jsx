import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ArcElement, Tooltip, Title, Legend, Chart as ChartJs } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Title, Legend);

const Chart = () => {
  const { medications } = useSelector((state) => state.medications);
  let rejected = 0;
  let inReview = 0;
  let active = 0;

  medications?.forEach((element) => {
    element.status === "Active" ? (active += 1) : element.status === "In Review" ? (inReview += 1) : (rejected += 1);
  });

  const data = {
    // labels: ["Rejected", "Success", "In Review"],
    datasets: [
      {
        data: [rejected, active, inReview],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)", "rgb(255, 159, 64)"],
        hoverOffset: 3,
      },
    ],
  };

  return (
    <div className="w-[55%] h-[55%]">
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
