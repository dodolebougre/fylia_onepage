import React from "react";
import { IoIosSave } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const ValueProp = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h2 className="text-center text-2xl mb-3 md:text-2xl lg:text-3xl max-w-[400px] md:max-w-[600px] lg:max-w-[700px]">
        {" "}
        ✶ Vos souvenirs méritent d’être gravés dans la toile ✶
      </h2>
      <div>
        <div className="flex flex-col lg:flex-row">
          <section className=" flex flex-col m-10 max-w-[400px] bg-gray bg-opacity-10 rounded p-4 backdrop-blur border border-white lg:bg-opacity-0 lg:border-none">
            <div className="flex flex-col items-center mb-3 lg:flex-row ">
              <div className="rounded-full bg-white p-4 shadow-lg mr-5 icon-container transition-transform duration-300 transform hover:scale-125">
                <IoIosSave size={32} />
              </div>
              <h3 className="text-2xl  mb-6 md:text-2xl lg:text-3xl mt-5">
                Sauvegardez vos moments
              </h3>
            </div>
            <p className="text-lg text-center lg:text-left">
              Choisissez un souvenir qui vous a marqué et racontez nous votre
              histoire ✓
            </p>
          </section>
          <section className="flex flex-col m-10 max-w-[400px] bg-gray bg-opacity-10 rounded p-4 backdrop-blur border border-white lg:bg-opacity-0 lg:border-none">
            <div className="flex flex-col items-center mb-3 lg:flex-row ">
              <div className="rounded-full bg-white p-4 shadow-lg mr-5 icon-container transition-transform duration-300 transform hover:scale-125">
                <FaPaintBrush size={32} />
              </div>
              <h3 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5 ">
                Soutenez les artistes
              </h3>
            </div>
            <p className="text-lg text-center lg:text-left">
              Les artistes les plus proches de chez vous, transforme votre
              souvenir en véritable oeuvre d’art ☞
            </p>
          </section>
          <section className="flex flex-col m-10 max-w-[400px] bg-gray bg-opacity-10 rounded p-4 backdrop-blur border border-white lg:bg-opacity-0 lg:border-none">
            <div className="flex flex-col items-center mb-3 lg:flex-row ">
              <div className="rounded-full bg-white p-4 shadow-lg mr-5 icon-container transition-transform duration-300 transform hover:scale-125">
                <MdFamilyRestroom size={32} />
              </div>
              <h3 className="text-2xl  mb-6 md:text-2xl lg:text-3xl mt-5">
                Partagez votre histoire
              </h3>
            </div>
            <p className="text-lg text-center lg:text-left">
              Faites revivre vos souvenirs de façon inédite grâce à l’audio
              combiné au tableau ✶
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
