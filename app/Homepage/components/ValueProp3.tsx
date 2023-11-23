import React from "react";

const ValueProp3 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex-row justify-center items-center flex flex-col">
        <div className="lg:w-1/3 md:w-1/2 w-2/3 duration-300 transform hover:scale-105 lg:ml-[150px]">
          <img src="/assets/image/bonhomme.png" alt="" />
        </div>
        <div
          className="rounded lg:text-left text-center  bg-white bg-opacity-10 p-8 text-white backdrop-blur shadow max-w-[400px] lg:bg-opacity-0 lg:backdrop-blur-none lg:shadow-none lg:max-w-[800px]
        lg:mr-[150px] "
        >
          <h1
            className="lg:text-6xl text-4xl "
            style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
          >
            ...Grace à l'artiste idéal
          </h1>
          <p className="text-2xl mt-4">
            Trouvez l’artiste qui vous convient en quelques clics
          </p>
          <ul className="text-1xl lg:text-lg md:text-lg mt-3">
            <li>✓ Des oeuvres adaptées à vos gouts et à votre budget</li>
            <li>✓ Des prestations entièrement personnalisables </li>
            <li>✓ Transmettez vos plus belles émotions</li>
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-center m-6">
        <button className="border p-3 text-center text-white border-white">
          Découvrez nos artistes ☞
        </button>
      </div>
    </div>
  );
};

export default ValueProp3;
