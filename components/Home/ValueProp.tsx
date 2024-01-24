import React from "react";
import Image from "next/image";

import { CiPen } from "react-icons/ci";
import { GiSolidLeaf } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";

const ValueProp = () => {
  return (
    <div
      id="value"
      className="xl:pt-[80px] pb-[80px] text-black flex flex-col items-center justify-center xl:flex-row pt-10 bg-gradient-to-r  from-white via-slate-100 to-white"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px]">
        Notre plus-value
      </h1>
      <section className="flex flex-col items-center p-[12px]  border border-black mt-10 xl:mt-0 xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <CiPen className=" text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            L’image de marque
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Nous vous mettons en relation avec des artistes proche de chez vous
          qui représente votre culture et vos voleurs ✶
        </p>
      </section>
      <section className="flex flex-col bg-gray p-[12px] border border-black xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <GiSolidLeaf className="text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            Bien être
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Nous stimulons la créativité et le bien être de vos équipes grace à
          l'art. Nous créons de la valeur auprès de vos clients ☞
        </p>
      </section>
      <section className="flex flex-col p-[12px]  border border-black  xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px]">
        <div className="flex flex-col items-center">
          <div>
            <MdHistoryEdu className=" text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5 text-center">
            Impact financier
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Nous vous permettons des avantages fiscaux dans le cas de
          l'attribution d'oeuvre de l'artiste ✶
        </p>
      </section>
    </div>
  );
};

export default ValueProp;
