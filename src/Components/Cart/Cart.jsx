import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Modal } from "../Modal/Modal";

export const Cart = ({ id }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOnclick = () => {
    setIsModalActive(true);
  };

  const handleModalClose = () => {
    setIsModalActive(false);
  };
  return (
    <>
      <button onClick={handleOnclick}>
        <CgShoppingCart />
      </button>
      <Modal isActive={isModalActive} onClose={handleModalClose} title="Cart" content={`${id}`} />
    </>
  );
};
