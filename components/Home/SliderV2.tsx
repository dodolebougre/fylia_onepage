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
              className="flex justify-center items-center"
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
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer">
                    <p className="font-light invisible group-hover:visible text-white">
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
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200396021902098542/supernoval_99898_an_office_in_a_company_with_desk_and_computer__96d20739-50d6-4c4d-94ee-e27ac586bf38.webp?ex=65c606e9&is=65b391e9&hm=fc5e58e3ba39c4cbde0c7350e10a44b146bc6e844c6b96ce1b9d0c60b5fa9c8b&=&format=webp&width=990&height=990"
                    width={700}
                    height={50}
                    className="w-[1/2] h-[1/2]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer">
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
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200396048053571605/supernoval_99898_a_team_building_in_a_company_with_people_who_i_fba41a52-a00c-4048-9517-5e9f1be61cc3.png?ex=65c606f0&is=65b391f0&hm=37907d1f8aa118a426ad9686214303e6005677293803fadf4311a32ba69163bd&=&format=webp&quality=lossless&width=990&height=990"
                    width={700}
                    height={50}
                    className="w-[1/2] h-[1/2]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity text-center text-2xl cursor-pointer">
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
