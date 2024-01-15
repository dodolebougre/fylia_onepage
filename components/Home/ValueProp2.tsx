import React from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ValueProp2 = () => {
  return (
    <div className="mb-10 text-black bg-white flex flex-col items-center justify-center xl:flex-row pt-10 pb-10">
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Notre proposition
      </h1>
      <div className="md:max-w-[1200px] max-w-[360px]">
        <section className="xl:flex-row justify-center items-center flex flex-col border border-black mt-10">
          <div
            className="flex flex-col xl:text-left text-center p-8 max-w-[600px]
      "
          >
            <h1 className="xl:text-6xl text-4xl mb-5">
              Transformez vos photos en œuvre d'art
            </h1>
            <p className="text-2xl xl:text-1xl mt-4 font-light ">
              Trouvez le style qui vous convient !
            </p>
            <ul className="text-1xl xl:text-lg mt-3 font-extralight">
              <li>Créez une oeuvre qui vous ressemble ✓</li>
              <li>Faites part de vos moments les plus extraordinaires ✓</li>
              <li>Transmettez vos plus belles émotions ✓</li>
            </ul>
            <div className="flex flex-col xl:items-start items-center mt-6">
              <button
                data-tally-open="mOGBWY"
                data-tally-layout="modal"
                className="border p-3 text-center hover:bg-black hover:text-white border-black font-light mt-10"
              >
                Essayez maintenant ☞
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-[600px] duration-300 mx-[50px]">
            <div className="flex flex-row mt-5 ">
              <div className="border border-black overflow-hidden inline-block mr-2 mb-2 ">
                <Image
                  src="/assets/image/montblancvalueprop.png"
                  width={246}
                  height={500}
                  alt="Picture of the author"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden inline-block mb-2 border border-black ">
                <Image
                  src="/assets/image/montblancvalueprop2.png"
                  width={246}
                  height={500}
                  alt="Picture of the author"
                  className="transition-transform duration-500 hover:scale-110 scale-105"
                />
              </div>
            </div>
            <div className="border border-black overflow-hidden inline-block mb-5 ">
              <Image
                src="/assets/image/imagevalueprop3.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="transition-transform duration-500 scale-105 hover:scale-110"
              />
            </div>
          </div>
        </section>
        <section className="xl:flex-row justify-center items-center flex flex-col max-w-[1200px] border border-t-0 border-black xl:gap-40 p-5">
          <div className="duration-300 z-10 border border-black overflow-hidden inline-block mt-5 xl:mt-0 xl:ml-5 mx-[50px] ">
            <ReactCompareSlider
              className=""
              boundsPadding={0}
              itemOne={
                <ReactCompareSliderImage
                  alt="Image one"
                  src="https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1192467453092044810/IMG_2539.jpeg?ex=65b2695b&is=659ff45b&hm=d195e627123eb68f8e2f07d5143537031c70d9860c99834344cddf634f481a03&=&format=webp&width=742&height=990"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  alt="Image two"
                  src="https://media.discordapp.net/attachments/1176824010663796818/1192468663173906532/supernoval_99898_flat_vector_illustration_travel_poster_of_a_li_727c4fb1-65d5-406f-a67c-ebee212b5bc3.png?ex=65b26a7c&is=659ff57c&hm=eb836e306dff32739801fee0f6d32ecd4b5ee8bfd464c9ed013ef7e509d11d9c&=&format=webp&quality=lossless&width=660&height=990"
                />
              }
              keyboardIncrement="5%"
              position={50}
              style={{
                height: "60vh",
                width: "250px",
              }}
            />
          </div>
          <div className="flex flex-col xl:text-right text-center p-8 max-w-[600px]">
            <h1 className="xl:text-6xl text-4xl mb-4">
              Redonnez du sens à vos souvenirs
            </h1>
            <p className="text-2xl mt-4 font-light">
              Exposez vos plus belles photos chez vous !
            </p>
            <ul className="text-1xl xl:text-lg md:text-lg mt-3 font-light">
              <li>✓ Des impressions prémiums adaptées à vos goûts</li>
              <li>✓ Des prestations entièrement personnalisables </li>
              <li>✓ En seulement quelques clics</li>
            </ul>
            <div className="flex flex-col xl:items-end items-center mt-6">
              <button
                className="border p-3 font-light text-center hover:bg-black hover:text-white border-black mt-10"
                data-tally-open="mOGBWY"
                data-tally-layout="modal"
              >
                Testez avec nous ☞
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ValueProp2;
