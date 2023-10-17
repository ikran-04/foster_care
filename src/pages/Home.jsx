import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyToChoseUs from "../components/WhyToChoseUs";
import Pcard from "../components/Pcard";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyToChoseUs />
      <div className="w-4/5 m-auto py-10 space-y-14 text-center mt-14">
        <h1 className="text-4xl font-semibold">OUR TEAM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center ">
          <Pcard name="Max Foster" position="Owner" src="/max.png" />
          <Pcard
            name="Hayley Weedon-Foster"
            position="HR & Admin"
            src="/hayle.png"
          />
          <Pcard
            name="Ken Foster"
            position="Business Development"
            src="/ken.png"
          />
          <Pcard name="Kevin Burgess" position="Team Lead" src="/kevin.png" />
        </div>
      </div>
    </div>
  );
};
