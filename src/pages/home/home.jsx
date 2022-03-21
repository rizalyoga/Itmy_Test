import React, { useEffect } from "react";
import CardTotalStatus from "../../components/cards/cardTotalstatus";
import CardHomeStatus from "../../components/cards/cardHomeStatus";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../store/action/medicationSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { medications, loading } = useSelector((state) => state.medications);

  useEffect(() => {
    dispatch(getMedications());
  }, [dispatch]);

  return (
    <>
      <div className="wraper min-h-screen">
        <CardTotalStatus />
        <CardHomeStatus medications={medications} loading={loading} />
      </div>
    </>
  );
};

export default Home;
