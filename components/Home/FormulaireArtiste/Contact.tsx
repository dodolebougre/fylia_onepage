import React from "react";
import Form from "./Form";
import Image from "next/image";

const form = () => {
  return (
    <div
      id="artiste"
      className="xl:pt-[80px] text-black flex flex-col items-center justify-center xl:flex-row bg-gradient-to-r md:bg-fixed bg-center object-cover"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px] mb-10 mt-10">
        Nous recrutons !
      </h1>
      <div className="items-center justify-between flex flex-col xl:flex-row xl:w-[1200px] md:w-[600px] w-[360px] border border-black ">
        <div className="xl:w-[600px] flex items-center justify-center">
          <Form />
        </div>
        <div className="flex items-center justify-center p-1 ">
          <div className="overflow-hidden inline-block ">
            <Image
              width={465}
              height={700}
              className="border border-black transition duration-700 hover:scale-110 ease-in-out xl:w-[465px] md:w-[600px]  w-[370px]"
              src="https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Peintre"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
