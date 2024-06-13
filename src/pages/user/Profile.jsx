import { LuLogOut } from "react-icons/lu";
// import { profileImg } from "../../assets/image";
import { FaFileImage } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {getAuth , signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { removeUser, resetCart } from "../../redux/dreamySlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userInfo = useSelector((state) => state.dreamy.userInfo);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
  console.log(userInfo);

  const handleLogout = ()=>{
    signOut(auth)
    .then(()=>{
      //Sign-out successfully.
      toast.success("Log Out Successfully!");
     if( dispatch(removeUser())){
        dispatch(resetCart())
        setTimeout(() => {
          navigate("/")
        }, 1000);
     } 
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  return (
    <section className="bg-[#f9f9fa] w-full h-full">
      <div className="py-5 bg-white shadow-sm">
        <div className="container flex  items-center justify-between ">
          <h1 className="text-4xl">Dreamy</h1>
          <img
            className="w-14 h-14 rounded-full border"
            src=  
            {userInfo
            ? userInfo.photoURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s"
           } 
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between py-8">
          <h1 className="font-headingFontTwo font-black text-3xl">Profile</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-slate-400 py-2 px-5 rounded-lg text-white hover:bg-slate-500 transition duration-300">
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
