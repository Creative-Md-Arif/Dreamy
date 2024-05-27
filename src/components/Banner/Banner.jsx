import Counter from "./Counter";

const Banner = () => {
  return (
    <section className="bg-Bg py-[82px]">
      <div className="container">
        {/* left side start */}
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className=" font-headingFont font-bold text-black text-6xl w-1/2">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className=" font-titleFont font-normal text-gray-500 text-xl w-[70%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="">
          <button className="bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-black hover:text-blue-500 hover:border-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Shop Now</button>
          </div>
          {/* counter components */}
          <div>
            <Counter />
          </div>
          {/* counter components */}
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="w-1/2">

        </div>
        {/* right side End */}
      </div>
    </section>
  );
};

export default Banner;
