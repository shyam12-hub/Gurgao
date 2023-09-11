import { PiStarFourFill } from "react-icons/pi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from "react";
function HomePage() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-4 p-2 home lg:shadow-lg ">
        <h2 className="text-white bg-[#50b04c] w-full p-1 text-center launch">
          LAUNCHING
        </h2>
        <h2 className="text-[#50b04c] text-3xl font-bold text-center">
          GODREJ SECTOR 49 GURUGRAM
        </h2>
        <div className="flex flex-col ">
          <span className="text-xl font-semibold">Sector 49, Gurugram</span>
          <span className="text-center">By Godrej Properties</span>
        </div>
        <div className="flex flex-col items-center bg-gray-300 w-full p-4 gap-2">
          <div className="flex gap-[5rem]">
            <span>Land Parcel</span>
            <span className="font-bold">9.8 Acres</span>
          </div>
          <div className="flex gap-[9rem]">
            <span>Towers</span>
            <span className="font-bold">4 to 5</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-[#50b04c] w-full p-2 text-white">
          <span className="flex gap-2 text-sm">
            <PiStarFourFill />{" "}
            <p>Italian Marbel Flooring In Living Dining Area</p>
          </span>
          <span className="flex gap-2 text-sm">
            <PiStarFourFill /> <p>Premium Modular Kitchen With Chimney & Hob</p>
          </span>
        </div>
        <h2 className="text-lg">
          3 BHK, 4 BHK Luxury Apartments Starting From
        </h2>
        <h2 className="flex  items-center text-[#50b04c]">
          <LiaRupeeSignSolid className="text-3xl" />
          <p className="text-2xl font-bold"> 4.5 Cr* Onwards</p>
        </h2>
        <button className="bg-[#50b04c] text-white p-2 rounded-md w-[10rem]">
          Enquire Now
        </button>
      </section>
      <div className=" p-4 lg:info">
        <section className="flex flex-col gap-3 p-2 shadow-2xl mb-5 ">
          <h2 className="text-[#50b04c] text-4xl font-bold text-center lg:text-start">
            Overview
          </h2>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#50b04c] text-3xl font-bold text-center ">
              Godrej Sector 49 Gurugram
            </h2>
            <h2 className="text-[#50b04c] text-2xl font-bold text-center ">
              Sector 49, Gurugram
            </h2>
            <div className="flex flex-col gap-4 lg:w-[75%] ">
              <div className="flex flex-col gap-3 p-2">
                <p>
                  Godrej Sector 49 Gurugram is a newly launched residential
                  project adding a new dimension to the real estate market by
                  serving upscale living in quality homes. A featured
                  construction would be done by Godrej Properties in Gurugram to
                  match up with the growing needs of homes. An array of homes
                  that is now standing with pride and ensuring you a living not
                  less than perfect this project put together all the elite
                  factors that make any of this unit a dream home.
                </p>
              </div>

              <div>
                {readMore && (
                  <p>
                    Offering 3 BHK, and 4 BHK apartments for comfy living it is
                    suitable for every class of people. Writing a new tale of
                    luxury featuring many other amenities the developer adds
                    this project as a gem in the realty market. Broadening the
                    periphery of Gurugram this project is located at Sector 49
                    Gurugram and gives a new place to nestle with family.
                  </p>
                )}
              </div>
              <button className="text-[#50b04c] border-2 border-[#50b04c] w-[15rem] p-2 rounded-md Hover  ">
                {" "}
                Download Brochure
              </button>
              <span
                onClick={() => setReadMore((prev) => !prev)}
                className="underline cursor-pointer duration-200 rounded-md w-28 text-center mb-2 hover:border-2 border-[#add4e9] "
              >
                {readMore ? "Read less" : "Read more"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default HomePage;
