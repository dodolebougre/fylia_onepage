import React, { useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

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
      overflow: "auto", // Ajoutez cette ligne pour permettre le défilement
      maxHeight: "80vh", // Limitez la hauteur à 80% de la vue en hauteur
    },
  };

  return (
    <div className="font-light">
      <button
        className="cursor-pointer hover:font-normal"
        onClick={() => setIsOpen(true)}
      >
        Paiement sécurisé
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        className=""
        ariaHideApp={false}
      >
        <div className="xl:w-[800px] lg:w-[600px] w-[360px]">
          <button
            className="border border-black w-6 h-6 rounded-full flex items-center justify-center shadow-xl  cursor-pointer text-black bg-white  xl:ml-[780px] absolute  lg:ml-[580px] ml-[340px] font-thin hover:bg-black hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose />
          </button>
          <h1 className="text-5xl text-center">Paiement sécurisé</h1>
          <br />
          <h2 className="text-xl font-semibold">
            {" "}
            Comment se déroule les paiements ?
          </h2>{" "}
          <p>
            Les paiements se réalisent, une fois le devis envoyés et validés par
            le client.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
