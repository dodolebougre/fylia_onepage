import React from "react";

import { CiPen } from "react-icons/ci";
import { PiLeafLight } from "react-icons/pi";
import { PiClockCountdownLight } from "react-icons/pi";

const ValueProp = () => {
  return (
    <div
      id="value"
      className="xl:pt-[80px] pb-[80px] text-black flex flex-col items-center justify-center xl:flex-row pt-10 bg-gradient-to-r  from-white via-slate-100 to-white"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px]">
        Nos forces
      </h1>
      <section className="flex flex-col items-center p-6  border border-black mt-10 xl:mt-0 xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <CiPen className=" text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            L’image de marque
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          Réalisez un investissement <strong>engagé</strong> , qui exprime les{" "}
          <strong>valeurs de votre entreprise</strong>, vous différencie de la
          concurrence tout en <strong> soutenant l’art </strong> et les artistes
          <strong> locaux</strong> ✶
        </p>
      </section>
      <section className="flex flex-col bg-gray p-6 border border-black xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px] xl:border-r-0 xl:border-b border-b-0">
        <div className="flex flex-col items-center">
          <div>
            <PiLeafLight className="text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5">
            Bien-être
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          <strong>Stimulez</strong> la créativité et le{" "}
          <strong>bien être </strong> de vos équipes grâce à l'art. Créez un
          environnement de travail <strong> stimulant</strong> qui nourrit
          l’engagement ✶
        </p>
      </section>
      <section className="flex flex-col p-6  border border-black  xl:max-w-[400px] md:w-[600px] md:max-w-[600px] max-w-[360px]">
        <div className="flex flex-col items-center">
          <div>
            <PiClockCountdownLight className=" text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-2xl mb-6 md:text-2xl lg:text-3xl mt-5 text-center">
            Avantages financiers
          </h1>
        </div>
        <p className="text-lg text-center font-light">
          En achetant une ou plusieurs œuvres d’arts et en{" "}
          <strong>soutenant nos artistes</strong> , votre entreprise est
          éligible à une <strong>déduction d’impôts sur 5 ans </strong> ✶
        </p>
      </section>
    </div>
  );
};

export default ValueProp;
