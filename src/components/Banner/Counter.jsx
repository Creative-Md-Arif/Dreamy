import CountUp from "react-countup";

const Counter = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-16">
        <div className="border-r-[2px] border-black border-opacity-20 ">
          <h1 className="font-headingFont font-bold text-[40px] text-black">
            <CountUp end={100} 
            duration={5}
            />
            <span className="font-headingFont font-bold text-[40px] text-black">+</span>
          </h1>
          <p className=" font-titleFont font-normal text-gray-500 text-xl">International Brands</p>
        </div>
        <div className="border-r-[2px] border-black border-opacity-20">
          <h1 className="font-headingFont font-bold text-[40px] text-black">
          <CountUp end={2000}
          duration={5}
          /><span className="font-headingFont font-bold text-[40px] text-black">+</span>
          </h1>
          <p className=" font-titleFont font-normal text-gray-500 text-xl">High-Quality Products</p>
        </div>
        <div>
          <h1 className="font-headingFont font-bold text-[40px] text-black">
          <CountUp end={30000}
          duration={5}
          
          /><span className="font-headingFont font-bold text-[40px] text-black">+</span>
          </h1>
          <p className=" font-titleFont font-normal text-gray-500 text-xl">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
