import React from "react";
import Hero from "../components/Home/Hero";
import ValueProp from "../components/Home/ValueProp";
import ValueProp2 from "../components/Home/ValueProp2";
import SliderV2 from "../components/Home/SliderV2";
import Proofbar from "../components/Home/Proofbar";
import Services from "../components/Home/Services";
import ParcoursClient from "../components/Home/ParcoursClient";
import Question from "../components/Home/Question";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Home/FormulaireArtiste/Contact";

const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Proofbar />
        <ValueProp />
        <ValueProp2 />
        <ParcoursClient />
        <SliderV2 />
        <Services />
        <Contact />
        <Question />
      </>
    </div>
  );
};

export default Home;
