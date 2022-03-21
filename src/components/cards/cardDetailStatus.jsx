import React from "react";

const CardDetailStatus = ({ status }) => {
  return (
    <div className="wraper py-3">
      {status === "Active" ? (
        <div className="status neuro rounded-lg px-2 py-2">
          <h1 className="text-xl text-success font-bold ">Active</h1>
          <p className="text-gray-500 -mt-1">Your prescription is success</p>
        </div>
      ) : status === "In Review" ? (
        <div className="status neuro rounded-lg px-2 py-2">
          <h1 className="text-xl text-review font-bold ">In Review</h1>
          <p className="text-gray-500 -mt-1">Your prescription is in review</p>
        </div>
      ) : (
        <div className="status neuro rounded-lg px-2 py-2">
          <h1 className="text-xl text-fail font-bold ">Rrescription Rejected</h1>
          <p className="text-gray-500 -mt-1">Your prescription is rejected</p>
        </div>
      )}
    </div>
  );
};

export default CardDetailStatus;
