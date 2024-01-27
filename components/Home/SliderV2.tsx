"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <section
      id="creation"
      className="xl:p-12 items-center flex xl:flex-row flex-col justify-center text-black mb-20"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] xl:w-[150px] xl:mb-0 mb-10">
        Exemples
      </h1>
      <div className="flex flex-col items-center text-center justify-center ">
        <div className="flex flex-col items-center justify-center border border-black xl:w-[1200px] md:w-[600px] w-[370px]">
          <div className="w-[100%]">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              className="flex justify-center items-center transition duration-700"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center group relative">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.licdn.com/dms/image/D4E22AQEiMUwPF-QZFA/feedshare-shrink_1280/0/1703695651581?e=1709164800&v=beta&t=hLiOWaFC8yDZ8HfjNM6xkNXkbXLLw5cMguqzO67Ozew"
                    width={700}
                    height={50}
                    className="w-[1/2] h-[1/2]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer duration-700 ease-in-out">
                    <p className="font-light invisible group-hover:visible text-white ">
                      Exemple de <strong>fresque</strong> <br />
                      Locaux de Microsoft
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center group relative">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200439358600257648/supernoval_99898_an_office_in_a_company_with_desk_and_computer__4d86374f-839f-4ee7-a77c-3c0fcbba12ad.png?ex=65c62f46&is=65b3ba46&hm=13e4f967e537767239b1cc42dc32f77a8414aca2c9b1270297e2c398e5f137cb&=&format=webp&quality=lossless&width=990&height=990"
                    width={700}
                    height={50}
                    className="w-[1/2] h-[1/2]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer duration-700 ease-in-out">
                    <p className="font-light invisible group-hover:visible text-white">
                      Exemple de <strong>tableaux</strong> <br />
                      Locaux d'une agence
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center group relative">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200432614427865149/supernoval_99898_people_painting_an_area_of_wall_in_the_office__db526f03-0a11-4769-922c-3a081db29590.webp?ex=65c628fe&is=65b3b3fe&hm=5c3afed4b448d8727a5a011d37ab72954d591adf550f77916d5b326137fbcd02&=&format=webp&width=990&height=990"
                    width={700}
                    height={50}
                    className="w-[1/2] h-[1/2]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer duration-700 ease-in-out">
                    <p className="font-light invisible group-hover:visible text-white">
                      Exemple de <strong>team-building </strong> <br />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
