const FooterSection2 = () => {
  return (
    <div className="space-y-4 max-w-[300px]">
      <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
      <h4 className="text-base font-bold">Get Daily Updates</h4>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 rounded-s-xl bg-white w-full py-4 px-8 focus:ring-0 focus:outline-none placeholder:text-dark2 text-sm font-light "
        />
        <button className="bg-[rgb(247,186,52)] text-white py-3 px-3 rounded-r-lg font-bold text-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 ease-in-out ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterSection2;
