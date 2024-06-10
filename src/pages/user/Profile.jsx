import { LuLogOut } from "react-icons/lu";
// import { profileImg } from "../../assets/image";
import { FaFileImage } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.dreamy.userInfo);
  console.log(userInfo);

  return (
    <section className="bg-[#f9f9fa] w-full h-screen">
      <div className="py-5 bg-white shadow-sm">
        <div className="container flex  items-center justify-between ">
          <h1 className="text-4xl">Dreamy</h1>
          <img
            className="w-14 h-14 rounded-full border"
            src={userInfo?.photoURL}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between py-8">
          <h1 className="font-headingFontTwo font-black text-3xl">Profile</h1>
          <button className="flex items-center gap-2 bg-slate-400 py-2 px-5 rounded-lg text-white hover:bg-slate-500 transition duration-300">
            Logout
            <LuLogOut />
          </button>
        </div>
        <div className="bg-white my-5 pl-10 py-5 rounded-md shadow-sm">
          <h2 className="text-[#ffc515] font-headingThree text-2xl font-medium">
            Account Details
          </h2>
        </div>
        <div className=" bg-white px-10 py-5 w-1/2 rounded-md shadow-sm">
          <h1 className=" font-headingThree font-bold text-3xl text-black">
            Personal Details
          </h1>
          <div className=" flex flex-col justify-center items-center gap-6 pt-5">
            <img
              className=" w-[200px] h-[200px] rounded-full border"
              src={userInfo?.photoURL}
              alt=""
            />
            <p className="font-headingThree font-normal text-xl text-black capitalize">
              image must be 200*200 px
            </p>
            <button className="bg-[#fff7e0] flex items-center justify-center gap-2 w-full py-3 rounded-md text-2xl text-black font-headingThree font-semibold uppercase">
              Upload Your Image{" "}
              <span>
                <FaFileImage />
              </span>
            </button>
            <h1 className="font-headingThree text-6xl text-black font-semibold">
             {userInfo?.displayName}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
