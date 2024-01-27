import React, { useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import { InlineWidget } from "react-calendly";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1001,
      maxHeight: "90vh", // Limitez la hauteur à 80% de la vue en hauteur
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "none",
      overflow: "none",
    },
  };

  return (
    <div className="font-light">
      <button
        className="transition hover:scale-105 duration-700 ease-in-out border p-3 font-light text-center hover:bg-black hover:text-white border-black my-10"
        onClick={() => setIsOpen(true)}
      >
        Rendez-vous en visio ☞
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="xl:w-[1000px] lg:w-[600px] w-[360px]">
          <button
            className="hidden border border-black w-6 h-6 rounded-full xl:flex items-center justify-center shadow-xl  cursor-pointer text-black bg-white  xl:ml-[920px] absolute  lg:ml-[580px] ml-[340px] font-thin hover:bg-black hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose />
          </button>
          <InlineWidget url="https://calendly.com/dorian-boatti/vous-avez-une-question-specifique" />
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
