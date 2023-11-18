import React from "react";

const ValueProp3 = () => {
  return (
    <div className="mt-[100px]">
      <section className="flex justify-between items-center">
        <div className="">
          <img width={940} src="/assets/image/familleimg.png" alt="" />
        </div>
        <div className=" bg-white p-20">
          <h1 className="text-6xl">...Grâce à l’artiste idéal !</h1>
          <p className="text-2xl mt-4">
            Trouvez l’artiste qui vous convient en quelques clics :
          </p>
          <ul className="text-lg mt-3">
            <li>✓ Des oeuvres adaptées à vos gouts et à votre budget</li>
            <li>✓ Des prestations entièrement personnalisables </li>
            <li>✓ Transmettez vos plus belles émotions</li>
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-center m-6">
        <button className="border p-3 text-center text-black border-black">
          Découvrez nos artistes ☞
        </button>
      </div>
    </div>
  );
};

export default ValueProp3;
