import React from "react";
import Form from "../../components/Form";

const form = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img3 ">
      <div className=" flex flex-col items-center m-10">
        <Form />
      </div>
      <img className="w-80 m-10" src="/assets/image/peintre.png" alt="" />
    </div>
  );
};

export default form;
