import React from "react";
import { ServicesCard } from "./ServicesCard";

const Services = () => {
  return (
    <div className="w-4/5  m-auto py-20 flex flex-col md:flex-row justify-center md:space-x-20 space-y-6 md:space-y-0">
      {/* <ServicesCard mode="dark" title="RESIDENTIAL CARE" />
      <ServicesCard classes="drop-shadow-xl" title="COMMERCIAL CARE" /> */}
      <div className="md:w-1/3  px-5 py-10 bg-[#7BB468] rounded-xl">
        <div className="flex flex-col items-center text-center text-white  space-y-5 px-6">
          <img
            src="/icons/icon.png"
            alt=""
            className="w-20 h-20 md:w-28 md:h-28"
          />
          <h1 className="text-2xl">RESIDENTIAL CARE</h1>
          <p className="text-base font-light">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. ac
            aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className="md:w-1/3  px-5 py-10 bg-[#F9F9F9] drop-shadow-xl rounded-xl">
        <div className="flex flex-col items-center text-center   space-y-5 px-10">
          <img
            src="/icons/icon2.png"
            alt=""
            className="w-20 h-20 md:w-28 md:h-28"
          />
          <h1 className="text-2xl ">COMMERCIAL CARE</h1>
          <p className="text-base font-light">
            We offer a wide variety of commercial maintenance services and
            tailor our packages to meet our client’s specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
