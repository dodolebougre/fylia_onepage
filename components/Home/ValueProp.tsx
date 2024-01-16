import React from "react";
import Image from "next/image";

import { CiPen } from "react-icons/ci";
import { GiSolidLeaf } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";

const ValueProp = () => {
  return (
    <div
      id="value"
      className="xl:pt-[80px] pb-[80px] text-white flex flex-col items-center justify-center xl:flex-row bg-[#163D48] pt-10"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px]">
        Notre plus-value
      </h1>
      <section className="flex flex-col items-center p-[12px]  border border-white mt-10 xl:mt-0 xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <CiPen className="text-white text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            Créativité Illimitée
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Choisissez parmi une variété de styles, du moderne au vintage, pour
          créer un poster qui représente votre plus beau moment ✓
        </p>
      </section>
      <section className="flex flex-col bg-gray p-[12px] border border-white xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <GiSolidLeaf className="text-white text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            Qualité inégalée
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Imprimés avec des encres de haute qualité sur des matériaux durables
          et légers, nos impressions offrent une netteté d'image exceptionnelle
          ☞
        </p>
      </section>
      <section className="flex flex-col p-[12px]  border border-white  xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px]">
        <div className="flex flex-col items-center">
          <div>
            <MdHistoryEdu className="text-white text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5 text-center">
            Votre histoire partagée
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Chaque poster raconte une histoire visuelle, capturant les émotions et
          les moments uniques de vos aventures ✶
        </p>
      </section>
    </div>
  );
};

export default ValueProp;
