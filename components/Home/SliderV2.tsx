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
              className="flex justify-center items-center "
            >
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.licdn.com/dms/image/D4E22AQEiMUwPF-QZFA/feedshare-shrink_1280/0/1703695651581?e=1709164800&v=beta&t=hLiOWaFC8yDZ8HfjNM6xkNXkbXLLw5cMguqzO67Ozew"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] xl:p-10"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200380825028526161/supernoval_99898_an_artists_profesionnal_exposition_room_painti_b148b45c-69df-47f8-a8f9-867235b78ef2.png?ex=65c5f8c2&is=65b383c2&hm=893f9116b86280e223a45ba4699bb2695b843051f1d03fe777f32e9220badd20&=&format=webp&quality=lossless&width=990&height=990"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] xl:p-10"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <Image
                    alt="entreprise comblé grâce a notre offre B2B"
                    src="https://media.discordapp.net/attachments/1176884287925145653/1200382734850334720/supernoval_99898_a_team_building_in_a_company_with_people_who_i_73d1cb71-8043-4cd9-bf48-ad8cdffc5268.png?ex=65c5fa8a&is=65b3858a&hm=ec7dd9b757d766ca222d168e8eff5b8b2eed39070ed1eb25c62ddfb0d40e85df&=&format=webp&quality=lossless&width=990&height=990"
                    width={800}
                    height={50}
                    className="w-[1/2] h-[1/2] xl:p-10"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
