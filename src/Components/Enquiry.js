function Enquiry() {
  return (
    <div>
      <section className="bg-gray-400 w-full p-5 flex flex-col gap-4  items-center registration lg:border-2 border-gray-200">
        <h2 className="text-xl text-white">
          Pre-Register here for Best Offers
        </h2>
        <form className="flex flex-col gap-3 w-[20rem] items-center">
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Mobile No." />
          <input type="email" placeholder="E-Mail Address" />
          <button className="bg-[#50b04c] text-white p-1 w-[15rem] rounded-lg">
            Pre-Registration Now
          </button>
        </form>
      </section>
    </div>
  );
}
export default Enquiry;
