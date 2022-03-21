import { useDispatch } from "react-redux";
import "./modalImage.css";
import { hide } from "../../store/action/showModal";

const ModalImage = (props) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hide());
  };

  if (props.show === false) {
    return <></>;
  }

  return (
    <>
      <div id="myModal" className="modal main">
        <span id="close" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-content" src={props.image} alt="prescription" />
      </div>
    </>
  );
};

export default ModalImage;
