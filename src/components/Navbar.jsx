import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-4/5 m-auto py-5 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" alt="" className="w-60" />
      </Link>
      <ul className="flex space-x-10 hidden lg:flex">
        <Link to="/">
          <li className="">Home</li>
        </Link>
        <Link to="/residential">
          <li className="">Residential Care</li>
        </Link>
        <Link to="/">
          <li className="">Service Packages</li>
        </Link>
        <Link to="/comercial">
          <li className="">Commercial care</li>
        </Link>
      </ul>

      <Link to="/contact">
        <a
          href="/contact"
          className="hidden md:flex px-8 py-1 bg-[#15803D] text-lg text-white  rounded"
        >
          Contact
        </a>
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className=" flex md:hidden">
        <HiBars3BottomRight size={"1.8rem"} />
      </button>
      {isOpen && (
        <div className=" md:hidden modal absolute top-[70px] right-5 w-[200px] p-5 bg-gray-50 border border-gray-100">
          <ul className="flex flex-col space-y-5">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">Home</li>
            </Link>
            <Link to="/residential" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Residential Care
              </li>
            </Link>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Service Packages
              </li>
            </Link>
            <Link to="/comercial" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Commercial care
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
