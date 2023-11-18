import React from "react";

const ValueProp2 = () => {
  return (
    <div className="mt-[100px]">
      <section className="flex justify-between items-center">
        <div className=" bg-white p-20">
          <h1 className="text-6xl">Rendez votre plus beau souvenir réel...</h1>
          <p className="text-2xl mt-4">
            Transformez votre souvenir le plus marquant en oeuvre d’art, en
            toute simplicité
          </p>
          <ul className="text-lg mt-3">
            <li>✓ Créez un souvenir impérissable</li>
            <li>✓ Personnalisez votre histoire</li>
            <li>✓ Transmettez vos plus belles émotions</li>
          </ul>
        </div>
        <div className="">
          <img width={940} src="/assets/image/familleimg.png" alt="" />
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
