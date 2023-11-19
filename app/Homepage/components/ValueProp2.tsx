import React from "react";

const ValueProp2 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex justify-between items-center">
        <div className="lg:w-2/3 md:w-full lg:text-left text-center  bg-white p-8">
          <h1 className="lg:text-6xl text-4xl">Rendez votre plus beau souvenir réel...</h1>
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
        <div className="lg:w-1/3 md:w-full">
          <img src="https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlsbGV8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
      </section>
      <div className="flex items-center justify-center m-6">
        <button className="border p-3 text-center text-black border-black">
          Racontez votre histoire ☞
        </button>
      </div>
    </div>
  );
};

export default ValueProp2;
