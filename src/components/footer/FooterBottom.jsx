import { Link } from "react-router-dom";
import { paymentLogoImg } from "../../assets/image"


const FooterBottom = () => {
      const currentYear = new Date().getFullYear();
  return (
    <div className=" border-t-2 w-full grid grid-cols-2 pt-6">
        <div className="">
        <p className="font-normal text-black text-lg"> Dreamy © {currentYear} All Rights Reserved</p>
        </div>
        <div className=" flex justify-end">
           <Link to="#">
           <img src={paymentLogoImg} alt="" />
           </Link>
        </div>
    </div>
  )
}

export default FooterBottom
