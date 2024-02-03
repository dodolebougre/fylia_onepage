"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { StrictMode } from "react";
import CalendlyWidget from "../Question/CalendlyWidget";

const Question = () => {
  return (
    <div
      id="question"
      className=" text-black bg-gradient-to-r  from-white via-slate-100 to-white flex flex-col items-center justify-center xl:flex-row pt-20 pb-20 xl:mt-10"
    >
      <h1 className="text-center flex flex-row justify-center items-center text-2xl xl:rotate-[-90deg] w-[150px] mb-10">
        F.A.Q
      </h1>
      <div className="xl:w-[1200px] md:w-[600px] w-[360px]  flex xl:flex-row flex-col border border-black items-center justify-center">
        <div className="md:w-[700px] flex flex-col items-center justify-center text-center">
          <h2 className=" w-[300px] text-2xl md:text-2xl lg:text-3xl text-center mt-10 ">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <CalendlyWidget />
        </div>
        <div className="font-light">
          <Accordion isCompact>
            <AccordionItem
              className="p-4"
              indicator={({ isOpen }: any) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[315px] ml-[105px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[329px] ml-[105px] " />
                )
              }
              key="1"
              aria-label="Quel est le coût d’une prestation?"
              title="Quel est le coût d’une prestation ?"
            >
              <p className="text-sm font-extralight text-start xl:w-[500px]">
                Le coût d'une prestation dépend de l'artiste choisi et du type
                de service. Il est calculé en fonction du temps nécessaire à la
                création de la prestation. Le prix ne dépassera jamais le budget
                convenu lors de nos entretiens.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Combien de temps pour une œuvre ?"
              className="p-4"
              indicator={({ isOpen }: any) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[255px] ml-10" />
                ) : (
                  <FaChevronLeft className="md:ml-[259px] ml-10" />
                )
              }
              title="Combien de temps pour faire une oeuvre ?"
            >
              <p className="text-sm font-extralight xl:w-[500px]">
                Le temps de création dépend du nombre d'œuvres commandées et de
                leur format. Il peut également varier en fonction du degré de
                personnalisation de la commande.
              </p>
            </AccordionItem>
            <AccordionItem
              className="p-4"
              key="3"
              aria-label="QCombien de temps pour une prestation ? ?"
              title="Combien de temps pour une prestation ?"
              indicator={({ isOpen }: any) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[280px] ml-[100px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[280px] ml-[100px] " />
                )
              }
            >
              <p className="text-sm font-extralight xl:w-[500px]">
                Le temps de prestation dépend exclusivement de vos besoins. En
                cas d'événement, il peut varier d'une demi-journée à plusieurs
                jours. De plus, il peut également fluctuer en fonction des
                disponibilités de vos salariés en cas d'ateliers participatifs.
              </p>
            </AccordionItem>
            <AccordionItem
              className="p-4"
              indicator={({ isOpen }: any) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[270px] ml-[180px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[270px] ml-[180px] " />
                )
              }
              key="4"
              aria-label="Comment sont sélectionnés vos artistes ? "
              title="Comment sont sélectionnés vos artistes ? "
            >
              <p className="text-sm font-extralight xl:w-[500px]">
                Nous sélectionnons nos artistes après les avoir rencontrés à
                plusieurs reprises personnellement. Nous proposons uniquement
                des artistes originaires de votre région, chacun spécialisé dans
                des types d'art bien distincts.
              </p>
            </AccordionItem>
            <AccordionItem
              className="p-4"
              indicator={({ isOpen }: any) =>
                isOpen ? (
                  <FaChevronDown className="md:ml-[245px] ml-[180px] " />
                ) : (
                  <FaChevronLeft className="md:ml-[245px] ml-[180px] " />
                )
              }
              key="5"
              aria-label="Quel sont exactement les avantages fiscaux ? "
              title="Quel sont exactement les avantages fiscaux ? "
            >
              <p className="text-sm font-extralight xl:w-[500px]">
                Selon l'article 238bis AB du Code général des Impôts, une
                entreprise soumise à l'impôt sur les sociétés ou à l'impôt sur
                le revenu dans la catégorie des BIC, qui achète des œuvres
                originales d'artistes vivants pour les exposer au public, a le
                droit de déduire le prix d'acquisition de son résultat
                imposable. Cette déduction s'effectue à raison de 20% par an
                pendant 5 ans, dans la limite de 20 000 € ou 0,5% du chiffre
                d'affaires hors taxes.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Question;
