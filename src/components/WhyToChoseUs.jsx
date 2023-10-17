import React from "react";

const WhyToChoseUs = () => {
  return (
    <div className="w-full bg-[#1E1E1E] my-20">
      <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between items-center py-10 space-y-10 md:space-y-0">
        <div className="md:w-1/3 text-white space-y-5">
          <h1 className="text-4xl font-semibold">Why To Choose Us</h1>
          <div>
            <ul className="px-4 space-y-5">
              <li>
                <h1>1) Competitive Pricing</h1>
                <p className="p-2 text-gray-400">
                  we believe in providing high-quality services at a fair price,
                  which is why We offer competitive pricing for all of our
                  services that is in line with the market
                </p>
              </li>
              <li>
                <h1>2) Expert Care</h1>
                <p className="p-2 text-gray-400">
                  we believe in providing high-quality services at a fair price,
                  which is why We offer competitive pricing for all of our
                  services that is in line with the market
                </p>
              </li>
              <li>
                <h1>3) Quality Service</h1>
                <p className="p-2 text-gray-400">
                  we believe in providing high-quality services at a fair price,
                  which is why We offer competitive pricing for all of our
                  services that is in line with the market
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 border-t-8 border-r-8 border-white">
          <img src="/choseus-image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyToChoseUs;
