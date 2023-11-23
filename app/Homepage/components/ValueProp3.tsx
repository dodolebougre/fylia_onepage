import React from "react";

const ValueProp3 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex-row justify-center items-center flex flex-col">
        <div className=" w-[400px] duration-300 transform hover:scale-105 z-10">
          <img className="rounded shadow"
            src="https://images.unsplash.com/photo-1595523052653-b9f497845c3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFydGlzdCUyMHBhaW50aW5nfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div
          className="rounded lg:text-left text-center  bg-white bg-opacity-10 p-8 text-white backdrop-blur shadow w-[400px] lg:w-[850px]"
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
