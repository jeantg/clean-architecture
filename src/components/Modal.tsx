import { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";
export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  showModal: boolean;
};
export const Modal = ({ children, showModal, onClose }: ModalProps) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-gray-800/50 h-screen w-screen flex items-center justify-center ">
      <div className="relative min-w-[30%] min-h-[400px] rounded-lg p-4 bg-white flex flex-col">
        <div className="ml-auto">
          <IoIosClose
            size={35}
            className="cursor-pointer icon"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
