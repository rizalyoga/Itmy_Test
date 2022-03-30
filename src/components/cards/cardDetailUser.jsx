import React from "react";
import Map from "../map/Map";

const CardDetailUser = ({ patient, address }) => {
  return (
    <div className="wraper neuro rounded-lg" style={{ marginBottom: "12px" }}>
      <div className="order-number p-2">
        <p className="text-gray-500">Order Number</p>
        <p>#{patient?.id}</p>
      </div>
      <div className="patient-name p-2">
        <p className="text-gray-500">Patient Name</p>
        <p>{patient?.full_name}</p>
      </div>
      <div className="phone-number p-2">
        <p className="text-gray-500">Phone Number</p>
        <p>{patient?.phone_number}</p>
      </div>
      <div className="patient-address p-2">
        <p className="text-gray-500">Patient Address</p>
        <p>
          {address?.second_line}, {address?.note}, {address?.postal_code}, {address?.district}, {address?.province}
        </p>
      </div>
      <Map lati={address?.latitude} long={address?.longitude} />
    </div>
  );
};

export default CardDetailUser;
