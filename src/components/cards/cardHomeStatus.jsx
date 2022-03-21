import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Loading from "../loading/loading";

const CardHomeStatus = ({ medications, loading }) => {
  const navigate = useNavigate();

  /* ---------------------------- style for status ---------------------------- */
  const statusSuccess = "text-success my-2 mx-2 font-bold text-lg";
  const statusReview = "text-review my-2 mx-2 font-bold text-lg";
  const statusRejected = "text-fail my-2 mx-2 font-bold text-lg";

  /* ------------------- function navigation to detail page ------------------- */
  const toDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  /* -------------------------- function for curency -------------------------- */
  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  if (loading) {
    return (
      <div className="pt-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="wraper pt-5">
      <h1 className="text-center font-bold text-lg">My Med</h1>
      {medications.length === 0 ? (
        <></>
      ) : (
        medications.map((data) => (
          <div className="bg-white w-full my-3 neuro pt-1 h-36 rounded-lg cursor-pointer" key={data.id} onClick={() => toDetail(data.id)}>
            <h1 className={data.status === "Active" ? statusSuccess : data.status === "In Review" ? statusReview : statusRejected}>{data.status}</h1>
            <div className="mx-2 row flex ">
              <div className="list-status w-6/12 bg-blue-500 h-full ">
                <p className=" text-lg font-bold">{data.full_name}</p>
                <p className="mt-3 text-gray-500">Order Number</p>
                <p className="text-gray-500">#{data.id}</p>
              </div>
              <div className="charts-status w-6/12 h-full flex flex-col items-end">
                <p className="text-gray-500">{moment(data.updated_at).format("DD MMM YYYY, hh:mm ")}</p>
                <p className="mt-9 text-lg font-bold">{data.total_price ? formatRupiah(data.total_price) : "Rp 0"}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardHomeStatus;
