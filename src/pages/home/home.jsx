import React, { useEffect, lazy, Suspense } from "react";
import CardTotalStatus from "../../components/cards/cardTotalstatus";
// import CardHomeStatus from "../../components/cards/cardHomeStatus";
import { useDispatch, useSelector } from "react-redux";
import { getMedications } from "../../store/action/medicationSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { medications, loading } = useSelector((state) => state.medications);
  const ComponentCards = lazy(() => import("../../components/cards/cardHomeStatus"));

  useEffect(() => {
    dispatch(getMedications());
  }, [dispatch]);

  const renderLoader = <p></p>;

  return (
    <>
      <div className="wraper min-h-screen">
        <CardTotalStatus />
        <Suspense fallback={renderLoader}>
          <ComponentCards medications={medications} loading={loading} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
