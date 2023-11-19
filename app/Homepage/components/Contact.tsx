import React from "react";
import Form from "../../components/Form";

const form = () => {
  return (
    <div
      id="contact"
      className="items-center justify-center h-screen mb-12 bg-center bg-cover flex object-cover md:bg-fixed"
      style={{
        backgroundImage: 'url("/assets/image/tableausombre2.png")',
      }}
    >
      <div className="lg:w-1/2 md:w-1/2 lg:flex lg:flex-col flex  items-center justify-center ">
        <Form />
      </div>
      <img
        className="lg:w-1/2 md:w-1/2 object-cover lg:h-[650px] md:h-[600px] md:block mr-10 hidden"
        src="/assets/image/peintre.png"
        alt=""
      />
    </div>
  );
};

export default form;
