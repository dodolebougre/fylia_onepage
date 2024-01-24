import React from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ValueProp2 = () => {
  return (
    <div
      id="services"
      className="mb-10 text-black bg-white flex flex-col items-center justify-center xl:flex-row pt-10 pb-10"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px]">
        Nos services
      </h1>
      <div className="xl:w-[1200px] md:w-[600px]  w-[360px]">
        <section className="xl:flex-row justify-center items-center flex flex-col border border-black mt-10">
          <div
            className="flex flex-col xl:text-left text-center p-8 max-w-[600px]
      "
          >
            <h1 className="xl:text-6xl text-4xl mb-5">
              Nous transformons vos espaces de travail
            </h1>
            <p className="text-2xl xl:text-1xl mt-4 font-light ">
              Des offres adaptées à vos besoins
            </p>
            <ul className="text-1xl xl:text-lg mt-3 font-extralight">
              <li>Nous trouvons l'artiste qui vous convient ! ✓</li>
              <li>
                Faites participer vos équipes à la réalisation des œuvres ✓
              </li>
              <li>Créez un lieu de convivialité qui vous ressemble ✓</li>
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
          <div className="flex flex-col max-w-[600px] duration-300 mx-[30px]">
            <div className="flex flex-row mt-5 ">
              <div className="border border-black overflow-hidden inline-block mr-2 mb-2 ">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/417675660_823248099566448_7461296100062776775_n.png?_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_ohc=Y2pKUKeDyu4AX_GiHa4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSAMA-u8YEO7R7IVh6XLUr9H-Xbp1kIZ34WU23UZJTF-g&oe=65D8EB54"
                  width={260}
                  height={500}
                  alt="Peintre"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden inline-block mb-2 border border-black ">
                <Image
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/417739255_1301157630579103_2380437704024145629_n.png?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=5aawG8O6FPUAX8hB70k&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQtpzku79oLpHNcMGfm8PZgGeAszyAo0jea2pxBHtevmQ&oe=65D8C639"
                  width={230}
                  height={500}
                  alt="Bureaux"
                  className="transition-transform duration-500 hover:scale-110 scale-105"
                />
              </div>
            </div>
            <div className="border border-black overflow-hidden inline-block mb-5 ">
              <Image
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/417818702_1120030429182021_293103289151597963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=3vJ3xtimlDsAX_lDQHp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSoQgkG0zlqfqrGxrd-r-Qi2fiuwL00FqFp3neaG7uauA&oe=65D8D84A"
                width={500}
                height={500}
                alt="Fresque"
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
                width: "300px",
              }}
            />
          </div>
          <div className="flex flex-col xl:text-right text-center p-8 max-w-[600px]">
            <h1 className="xl:text-6xl text-4xl mb-4">
              Nous utilison les oeuvres de notre artiste dans votre branding et
              communication
            </h1>
            <p className="text-2xl mt-4 font-light">
              Exposez votre plus belle création sur votre produit !
            </p>
            <ul className="text-1xl xl:text-lg md:text-lg mt-3 font-light">
              <li>✓ Une impression premium adaptée à vos goûts</li>
              <li>✓ Une prestation entièrement personnalisable </li>
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
