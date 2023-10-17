import React from "react";

const Footer = () => {
  return (
    <div className="h-52 flex flex-col items-center ">
      {/* <h1 className="text-4xl mb-4">Foster Care</h1> */}

      <img className="w-72 mb-6" src="/logo.png" alt="logo" />
      <div className="text-xs md:text-base space-x-4 md:space-x-10 mb-8">
        <a>Home</a>
        <a>Residential Care</a>
        <a>Service Package</a>
        <a>Commercial Care</a>
        <a>Contact</a>
      </div>
      <div className="flex space-x-8">
        <div className="bg-[#3DBE00] w-[3rem] h-[3rem] rounded flex items-center justify-center">
          <img src="/inst.svg" alt="" />
        </div>
        <div className="bg-white w-[3rem] h-[3rem] rounded shadow flex items-center justify-center">
          <img src="/facebook.svg" alt="" />
        </div>
        <div className="bg-white w-[3rem] h-[3rem] rounded shadow flex items-center justify-center">
          <img src="/email.svg" alt="" />
        </div>
        <div className="bg-white w-[3rem] h-[3rem] rounded shadow flex items-center justify-center">
          <img src="/whatsapp.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
