import React from "react";

export const Comercial = () => {
  return (
    <div>
      {/* section one */}
      <div className="w-full h-[500px] my-20 bg-[url('/image6.jpg')] bg-cover">
        <div className="md:w-1/2 h-full flex justify-center items-center bg-black/30 border-t">
          <h1 className="text-5xl font-bold leading-snug text-white">
            Experience <br /> Speaks for its Self
          </h1>
        </div>
      </div>

      {/* section two */}
      <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 space-y-5 p-5">
          <h1 className="text-4xl font-semibold">COMMERCIAL CARE</h1>
          <p>
            We offer a wide variety of commercial maintenance services and
            tailor our packages to meet our client’s specific needs.
          </p>
          <p>
            From budget commercial store-frontage to horticultural care for a
            higher-end condominium, we have packages and prices to suit the
            specific needs of any client.{" "}
          </p>
          <p>
            While we are happy to discuss these needs over a phone call and
            provide a free quote, for those who can meet on site and offer a
            more detailed job scope and specification, the more value can be
            offered, both in prices and customer satisfaction.
          </p>

          <button>
            <a href="/" className="px-8 py-2 bg-[#3DBE00]">
              Get a Quote
            </a>
          </button>
        </div>
        <div className="md:w-1/3 p-5 border-4 ">
          <img src="/image7.jpg" alt="" />
        </div>
      </div>

      {/* section three */}
      <div className="w-full my-20 bg-gray-50 py-10">
        <div className="w-11/12 lg:w-3/5  m-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-8 py-5">
          <div className="p-5 bg-white space-y-5">
            <img src="/image8.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img src="/icons/scissors.png" alt="" className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
          <div className="p-5 bg-white space-y-5">
            <img src="/image9.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img
                  src="/icons/outdoor-garden.png"
                  alt=""
                  className="w-8 h-8"
                />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
          <div className="p-5 bg-white space-y-5">
            <img src="/image10.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img src="/icons/shrub.png" alt="" className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
          <div className="p-5 bg-white space-y-5">
            <img src="/image11.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img src="/icons/walkman.png" alt="" className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
          <div className="p-5 bg-white space-y-5">
            <img src="/image12.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img src="/icons/mdi_lawn.png" alt="" className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
          <div className="p-5 bg-white space-y-5">
            <img src="/image13.jpg" alt="" />
            <div className="flex  items-center space-x-5">
              <div className="p-2 bg-green-800 rounded-full">
                <img src="/icons/snow.png" alt="" className="w-8 h-8" />
              </div>
              <h1 className="text-xl font-medium">
                Professional Grass Cutting
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
