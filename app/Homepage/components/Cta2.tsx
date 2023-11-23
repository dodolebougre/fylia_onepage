import Button from "@/app/components/Button/Button";
import React from "react";

const Cta2 = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center text-white">
      <h2
        className="text-center text-2xl md:max-w-[600px] lg:max-w-[700px] font-semibold mb-10"
        style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
      >
        ☙ Notre équipe ❧
      </h2>
      <img src="/assets/image/Notreequipe.png" alt="" />
      <div className="flex flex-col  bg-opacity-10 bg-white rounded p-10 backdrop-blur text-2xl text-center max-w-[400px] lg:max-w-[600px] m-10 shadow">
        <h2 className=" text-4xl text-center p-5" style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}>
          Nous allons sauver des milliers de souvenirs.
        </h2>
        <p className="mb-4 text-xl">Nous attendons le votre !</p>
        <Button />
      </div>
    </div>
  );
};

export default Cta2;
