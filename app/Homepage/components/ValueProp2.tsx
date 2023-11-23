import React from "react";

const ValueProp2 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex-row justify-center items-center flex flex-col">
        <div className=" rounded lg:text-left text-center  bg-white bg-opacity-10 p-8 text-white backdrop-blur shadow max-w-[400px] lg:bg-opacity-0 lg:backdrop-blur-none lg:shadow-none lg:max-w-[800px]
        lg:ml-[150px] ">
          <h1 className="lg:text-6xl text-4xl " style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }} >
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
        <div className="lg:w-1/3 md:w-1/2 w-2/3 duration-300 transform hover:scale-105 lg:mr-[150px]">
          <img src="/assets/image/bonhomme2.png" alt="" />
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
