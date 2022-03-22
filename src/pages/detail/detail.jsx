import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardDetailStatus from "../../components/cards/cardDetailStatus";
import CardDetailUser from "../../components/cards/cardDetailUser";
import CardDetailPrescription from "../../components/cards/cardDetailPrescriptionImage";
import { getDetailMedications } from "../../store/action/detailSlice";
import Loading from "../../components/loading/loading";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { detailMedications, loading } = useSelector((state) => state.detailMedications);

  useEffect(() => {
    dispatch(getDetailMedications(id));
  }, [dispatch, id]);

  const backtoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <div className="navigation flex items-center py-1 w-full" style={{ background: "#F7F7F7" }}>
        <div className="absolute text-3xl cursor-pointer">
          <IoIosArrowBack onClick={backtoHome} />
        </div>
        <div className="flex justify-center items-center w-full pt-1">
          <h1 className=" text-center text-xl font-bold">DETAIL PAGE</h1>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center min-h-[90vh]">
          <Loading />
        </div>
      ) : (
        <>
          <CardDetailStatus status={detailMedications.status} />
          <CardDetailUser patient={detailMedications.patient} address={detailMedications.address} />
          <CardDetailPrescription image={detailMedications.prescription_image} />
        </>
      )}
    </div>
  );
};

export default Detail;
