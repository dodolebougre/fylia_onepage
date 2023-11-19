import React from "react";

const ValueProp3 = () => {
  return (
    <div className="mt-[100px]">
      <section className="lg:flex justify-between items-center">
        <div className="lg:w-1/3 md:w-full object-cover">
          <img src="https://plus.unsplash.com/premium_photo-1677171381845-c6627ed5d2ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGFydGlzdGV8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className="lg:w-2/3 md:w-full lg:text-left text-center  bg-white p-16">
          <h1 className="lg:text-6xl text-4xl">...Grâce à l’artiste idéal !</h1>
          <p className="text-2xl mt-4">
            Trouvez l’artiste qui vous convient en quelques clics :
          </p>
          <ul className="text-1xl lg:text-lg md:text-lg mt-3">
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
