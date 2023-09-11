import { LiaRupeeSignSolid } from "react-icons/lia";
function Price() {
  return (
    <div className=" p-4 lg:info">
      <section className="flex flex-col gap-3 p-2 shadow-2xl mb-5 ">
        <h2 className="text-3xl text-center text-[#50b04c] font-semibold">
          Price
        </h2>
        <div className="px-[4rem] flex flex-wrap gap-5">
          <div>
            <div className="hidden  ">
              <h2 className="border-[0.5px] order-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                Type
              </h2>
              <h2 className="border-[0.5px] border-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                Carpet Area
              </h2>
              <h2 className="border-[1px] borer-gray-200 p-2 w-[25rem] text-center text-lg font-semibold">
                Price
              </h2>
            </div>
            {/* 1 */}
            <div className="flex">
              <p className="border-[0.5px] border-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                3 BHK
              </p>
              <p className="border-[0.5px] order-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                2100-2200 sq.ft.
              </p>
              <p className="flex  gap-2 items-center border-[0.5px] order-gray-200 p-2 w-[25rem] text-center text-lg font-semibold">
                <LiaRupeeSignSolid /> 4.5 Cr* Onwards
                <button className="text-white bg-[#50b04c] p-2 rounded-lg ">
                  Price Break
                </button>
              </p>
            </div>
            {/* 2 */}
            <div className="flex">
              <p className="border-[0.5px] border-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                3 BHK+U
              </p>
              <p className="border-[0.5px] order-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                2500-2600 sq.ft.
              </p>
              <p className="flex  gap-2 items-center border-[0.5px] order-gray-200 p-2 w-[25rem] text-center text-lg font-semibold">
                <LiaRupeeSignSolid /> On Request
                <button className="ml-10 text-white bg-[#50b04c] p-2 rounded-lg ">
                  Price Break
                </button>
              </p>
            </div>
            {/* 3 */}
            <div className="flex">
              <p className="border-[0.5px] border-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                4 BHK +U
              </p>
              <p className="border-[0.5px] order-gray-200 p-2 w-[10rem] text-center text-lg font-semibold">
                3100-3200 sq.ft.
              </p>
              <p className="flex  gap-2 items-center border-[0.5px] order-gray-200 p-2 w-[25rem] text-center text-lg font-semibold">
                <LiaRupeeSignSolid /> On Request
                <button className="ml-10 text-white bg-[#50b04c] p-2 rounded-lg ">
                  Price Break
                </button>
              </p>
            </div>
          </div>
          <div className="cursor-pointer">
            <img
              src="https://godrej-sector49gurgaon.com/assets/img/comman/sample/costing-details-320w.webp"
              alt="img"
              className="m"
            />
            <button className="text-white bg-[#50b04c] w-full p-1">
              Complete Costing Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Price;
