import Button from "@/app/components/Button/Button";
import React from "react";

const Cta2 = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center text-white mt-20 mb-10">
      <h2
        className="text-center text-2xl mb-3 md:text-2xl lg:text-3xl max-w-[400px] md:max-w-[600px] lg:max-w-[700px] font-semibold "
        style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
      >
        ☙ Notre équipe ❧
      </h2>
      <img src="/assets/image/Notreequipe.png" alt="" />
      <div className="flex flex-col  bg-opacity-10 bg-white rounded p-8 backdrop-blur text-2xl text-center max-w-[400px] lg:max-w-[600px] m-20 shadow">
        <h2 className=" font-semibold text-2xl md:text-3xl text-center p-5" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}>
          Nous allons sauver des milliers de souvenirs.
        </h2>
        <p className="mb-4 text-xl">Nous attendons le votre !</p>
        <div className="mb-4">
        <Button/></div>
      </div>
    </div>
  );
};

export default Cta2;
