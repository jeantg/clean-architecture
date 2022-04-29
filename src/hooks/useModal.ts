import { useState } from "react";
export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  return {
    handleModal: () => setShowModal(!showModal),
    showModal,
  };
};
