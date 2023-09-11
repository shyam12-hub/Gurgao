import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HomePage from "./HomePage";
import Enquiry from "./Enquiry";
import Price from "./Price";
function Navbar() {
  const [ham, setHam] = useState(false);
  return (
    <div className="bg-white">
      <nav className="flex  justify-between items-center  relative">
        <div>
          <img
            src="https://godrej-sechrefr49gurgaon.com/assets/img/comman/logo.webp"
            alt="loading"
            className="w-[15rem]"
          />
        </div>
        <GiHamburgerMenu
          onClick={() => setHam((prev) => !prev)}
          className="text-2xl lg:hidden"
        />
        {ham && (
          <div className="bg-white absolute hrefp-[5rem] flex flex-col  justify-center items-center w-full lg:hidden">
            <a
              href="#home"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Home
            </a>
            <a
              href="#price"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Price
            </a>
            <a
              href="#"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Site & Floor Plan
            </a>
            <a
              href="#"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Location
            </a>
            <a
              href="#"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Site Video
            </a>
            <a
              href="#"
              className="border-[0.5px] border-gray-300 w-full text-center"
            >
              Brochure
            </a>
          </div>
        )}
        {/* web view */}
        <div className=" flex justify-center items-center w-full none lg:block">
          <a
            href="#home"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Home
          </a>
          <a
            href="#price"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Price
          </a>
          <a
            href="#"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Site & Floor Plan
          </a>
          <a
            href="#"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Location
          </a>
          <a
            href="#video"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Site Video
          </a>
          <a
            href="#"
            className="p-7 border-[0.5px] border-gray-300 w-full text-center"
          >
            Brochure
          </a>
        </div>
      </nav>
      <div className='h-[92vw] w-full bg-[50%] lg:h-[92vh] lg:w-[78vw]   bg-cover bg-[url("https://godrej-sechrefr49gurgaon.com/assets/img/webp/b1-1400w.webp")] '></div>
      <HomePage id="home" />

      <Price id="price" />
      <Enquiry />
    </div>
  );
}

export default Navbar;
