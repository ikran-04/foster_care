import React from "react";

export const Residential = () => {
  return (
    <div>
      {/* section one */}
      <div className="w-4/5 m-auto py-10 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl font-bold text-[#29401E]">We Adopt Yards</h1>
          <p>
            <span className="text-semibold text-xl text-[#226A00]">
              LET US ADOPT YOUR YARD
            </span>
            <br></br>
            Custom build your own package, or choose from one of our specially
            tailored Adopt-A-Yard programs that works best for you! At
            Fostercare Property Service, we are committed to meeting your
            specific property needs.
          </p>
          <p>
            <a
              href="/"
              className="px-8 py-2 bg-[#003202] text-white font-semibold"
            >
              Get a free quote
            </a>
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/image.jpg" alt="" />
        </div>
      </div>

      {/* section Two */}
      <div className="w-full  h-[300px] md:h-[500px] my-20  bg-[url('/image2.png')] bg-cover">
        <div className="md:w-1/3 h-full m-auto flex flex-col justify-center items-center space-y-5 text-white text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Competitive Pricing. Expert Care. Quality Service.
          </h1>
          <a href="/" className="px-8 py-2 font-semibold bg-[#3DBE00]">
            Email us
          </a>
        </div>
      </div>

      {/* section three */}
      <div className="w-11/12 md:w-4/5 m-auto my-20 space-y-[100px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="md:w-1/3 ">
            <img src="/image3.jpg" alt="" />
          </div>
          <div className="md:w-1/2 space-y-5">
            <p className="font-light">BRONZE</p>
            <h1 className="text-4xl font-semibold">BRONZE CARE PACKAGE</h1>
            <ul className="space-y-4 list-disc ml-5">
              <li>
                Snow & Ice Bronze - includes sidewalks & driveway to be cleared
                within <span>24</span> hours of the end of a snowfall exceeding
                <span>0.5 cm</span> & sanding of icy spots.
              </li>
              <li>
                Lawn Cutting & Trimming - as required either weekly or biweekly.
              </li>
              <li>Fall & Spring Clean Up</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="md:w-1/2 space-y-5">
            <p className="font-light">GOLD</p>
            <h1 className="text-4xl font-semibold">Gold Care Package</h1>
            <ul className="space-y-4 list-disc ml-5">
              <li>
                Snow & Ice Gold - includes sidewalks & driveway to be cleared
                continuously and within 24 hours of the end of snow falling
                exceeding 0.5 cm; as well as sanding and ice melt application.
                application.
              </li>
              <li>
                Lawn Cutting & Trimming - as required either weekly or biweekly.
              </li>
              <li>Fall & Spring Clean Up - includes aeration/fertilizer.</li>
            </ul>
          </div>
          <div className="md:w-1/3 ">
            <img src="/image4.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="md:w-1/3 ">
            <img src="/image3.jpg" alt="" />
          </div>
          <div className="md:w-1/2 space-y-5">
            <p className="font-light">PLATINUM</p>
            <h1 className="text-4xl font-semibold">PLATINUM CARE PACKAGE</h1>
            <ul className="space-y-4 list-disc ml-5">
              <li>
                Snow & Ice Platinum - includes sidewalks & driveway to be
                cleared continuously and within 24 hours of the end of snow
                falling exceeding 0.5 cm; as well as sanding and ice melt
                application. application and nuisance event call-outs included.
              </li>
              <li>
                Lawn Cutting & Trimming - as required either weekly or biweekly
                and includes monthly blade edging.
              </li>
              <li>
                Fall Cleanup - of leaves and final lawn cut and also includes
                cutting back of herbaceous perennials and grasses.
              </li>
              <li>
                Spring Cleanup - includes deep core aeration, liquid fertilizer
                and weed control to be performed. Ongoing liquid fertilizer and
                weed control program (up to 5 applications.)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
