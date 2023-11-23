import React from "react";

const ValueProp2 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex-row justify-center items-center flex flex-col ">
        <div
          className=" rounded lg:text-left text-center  bg-white bg-opacity-10 p-5 text-white backdrop-blur shadow w-[400px] lg:w-[850px]
      "
        >
          <h1
            className="lg:text-6xl text-4xl "
            style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Rendez votre plus beau souvenir réel...
          </h1>
          <p className="text-2xl mt-4">
            Transformez votre souvenir le plus marquant en oeuvre d’art, en
            toute simplicité
          </p>
          <ul className="text-1xl lg:text-lg md:text-lg mt-3">
            <li>✓ Créez un souvenir impérissable</li>
            <li>✓ Personnalisez votre histoire</li>
            <li>✓ Transmettez vos plus belles émotions</li>
          </ul>
        </div>
        <div className="w-[400px] duration-300 transform hover:scale-105 ">
          <img
            className="rounded shadow"
            src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
      <div className="flex items-center justify-center m-6">
        <button className="border p-3 text-center text-white border-white">
          Racontez votre histoire ☞
        </button>
      </div>
    </div>
  );
};

export default ValueProp2;
