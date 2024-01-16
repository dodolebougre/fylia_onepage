"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Question = () => {
  return (
    <div
      id="question"
      className=" text-white bg-[#163D48] flex flex-col items-center justify-center xl:flex-row pt-20 pb-20 xl:mt-10"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px] mb-10">
        F.A.Q
      </h1>
      <div className="xl:w-[1200px] md:w-[600px] w-[360px]  flex xl:flex-row flex-col border border-white items-center justify-center">
        <div className="md:w-[600px] flex flex-col items-center justify-center text-center">
          <h1 className=" w-[300px] text-2xl md:text-2xl lg:text-3xl text-center mt-10 ">
            Vous ne trouvez pas la réponse à votre question ?
          </h1>
          <button
            className="font-light border p-4 m-10 text-white hover:bg-white hover:text-black"
            data-tally-open="mVJ97v"
            data-tally-layout="modal"
            data-tally-emoji-animation="wave"
          >
            Contactez nous ☞
          </button>
        </div>
        <div className="font-light">
          <Accordion isCompact>
            <AccordionItem
              className="p-4"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[270px] ml-[105px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[270px] ml-[105px] " />
                )
              }
              key="1"
              aria-label="Quelle est le coût d’une oeuvre ?"
              title="Quelle est le coût d’une oeuvre ?"
            >
              <p className="text-sm font-extralight text-start">
                Le cout de l'oeuvre débutera à partir de 50€ et augmentera
                <br />
                en fonction de plusieurs critères : <br /> - La taille <br />
                - Le support <br />- Le nombre d'interventions de nos designers
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Combien de temps pour une œuvre ?"
              className="p-4"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[175px] ml-10" />
                ) : (
                  <FaChevronLeft className="md:ml-[175px] ml-10" />
                )
              }
              title="Combien de temps pour faire une impression ?"
            >
              <p className="text-sm font-extralight">
                Grâce à l'IA, l'impression est instantanée. En engageant nos
                designers, <br /> le temps de fabrication sera limité à un
                maximum de 3 jours ouvrés.
              </p>
            </AccordionItem>
            <AccordionItem
              className="p-4"
              key="3"
              aria-label="Quel est le moyen de livraison utilisé ?"
              title="Quel est le temps de livraison ?"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[280px] ml-[100px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[280px] ml-[100px] " />
                )
              }
            >
              <p className="text-sm font-extralight">
                Délai de livraison : 5 à 7 jours ouvrés.
              </p>
            </AccordionItem>
            <AccordionItem
              className="p-4"
              indicator={({ isOpen }) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[300px] ml-[180px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[300px] ml-[180px] " />
                )
              }
              key="4"
              aria-label="Y’a t’il une garantie ?"
              title="Y’a t’il des frais de livraison ?"
            >
              <p className="text-sm font-extralight">
                Des frais de livraison de 10 euros seront rajoutés à votre
                commande.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Question;
