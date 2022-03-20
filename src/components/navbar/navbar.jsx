import React from "react";
import Clock from "react-live-clock";

const navbar = () => {
  return (
    <div className="w-full text-center bg-gray-800 text-white py-[3px] rounded-b-md">
      <Clock format={"HH:mm a"} ticking={true} timezone={"ID"} />
    </div>
  );
};

export default navbar;
