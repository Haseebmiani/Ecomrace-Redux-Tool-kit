import React from "react";
import logo from "../../assets/images/logo.png";
import Navcart from "../Navbar/Navcart";

const Nav = () => {
  return (
    <>
      <div>
        <div className="bg-black p-2 w-full">
          <h3 className=" text-white font-inter font-bold  tracking-normal leading-none  text-center">
            Welcome All
          </h3>
        </div>
        <div className="flex  justify-around items-center ">
          <div>
            <img className="h-28 w-full" src={logo} alt="" />
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className=" w-6 h-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
                Whish List
              </p>
              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center  mb-10">
                <Navcart />
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-black flex p-4 w-full justify-around">
          <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center">
            50& OFF
          </div>
          <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center">
            Free Shopping and returns
          </div>
          <div className=" text-white  font-inter text-base font-medium tracking-normal leading-none text-center">
            Different Payment Methods
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
