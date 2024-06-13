import { casualImg, formalImg, gymImg, partyImg } from "../../assets/image";

const DressStyle = () => {
  return (
    <section>
      <div className="container bg-[#F0F0F0] flex flex-col gap-2 items-center py-20 rounded-lg">
            <h1 className="font-bold font-headingTwo text-5xl text-center pb-5">BROWSE BY dress STYLE</h1>
        <div className="flex gap-2">
          <div className="relative hover:shadow-lg hover:rounded-[20px]">
            <img className="rounded-[20px]" src={casualImg} alt="" />
            <h3 className="absolute top-7 left-8 z-50 font-titleFont text-3xl font-bold">Casual</h3>
          </div>
          <div className="relative hover:shadow-lg hover:rounded-[20px]">
            <img className="rounded-[20px]" src={formalImg} alt="" />
            <h3 className="absolute top-7 left-8 z-50 font-titleFont text-3xl font-bold">Formal</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative hover:shadow-lg hover:rounded-[20px]">
            <img className="" src={partyImg} alt="" />
            <h3 className="absolute top-7 left-8 z-50 font-titleFont text-3xl font-bold">Party</h3>
          </div>
          <div className="hover:shadow-lg hover:rounded-[20px] ">
            <img className=" rounded-[20px]" src={gymImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
