import React from "react";
import Form from "./Form";
import Image from "next/image";

const form = () => {
  return (
    <div id="artiste"
      className="xl:pt-[80px] pb-10 text-black flex flex-col items-center justify-center xl:flex-row  pt-10 bg-gradient-to-r md:bg-fixed bg-center object-cover"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px] mb-10">
        Nous recrutons !
      </h1>
      <div className="items-center justify-center flex flex-col xl:flex-row xl:w-[1200px] md:w-[600px] w-[360px] border border-black ">
        <div className="md:w-[600px] flex items-center justify-center">
          <Form />
        </div>
        <div className="md:w-[400px] flex items-center justify-center p-10 ">
          <Image
            width={400}
            height={700}
            className="border border-black"
            src="https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Peintre"
          />
        </div>
      </div>
    </div>
  );
};

export default form;
