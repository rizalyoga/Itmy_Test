import React from "react";
import Clock from "react-live-clock";

const navbar = () => {
  return (
    <div className="text-center bg-gray-800 text-white py-[3px] sticky top-0 w-full">
      <Clock format={"HH:mm a"} ticking={true} timezone={"Asia/Jakarta"} />
    </div>
  );
};

export default navbar;
