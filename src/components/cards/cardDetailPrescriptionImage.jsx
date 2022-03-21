import React from "react";
import prescriptionImage from "../../Written-Regular.webp";
import ModalImage from "../modal/modalImage";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../../store/action/showModal";

const CardPrescriptionImage = ({ image }) => {
  const dispatch = useDispatch();

  const isVisible = useSelector((state) => state.isVisible.value);

  const showModalImage = () => {
    dispatch(show());
  };

  return (
    <>
      <div className="wraper neuro">
        <div className="p-2 h-36 w-36">
          <p className="text-gray-500">Prescription</p>
          <img className="cursor-pointer" src={prescriptionImage} alt="prescreption" onClick={showModalImage} />
        </div>
      </div>
      <ModalImage show={isVisible} image={image} />
    </>
  );
};

export default CardPrescriptionImage;
