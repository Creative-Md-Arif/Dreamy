import { groupImg, groupOneImg, gucciImg, pradaImg, zaraImg } from "../../assets/image"

const Logo = () => {

      
  return (
    <section className=" bg-black">
       <div className=" container flex justify-between gap-20 py-5 ">
           <img className="bg-black" src={groupOneImg} alt=""/> 
           <img className="bg-black" src={groupImg} alt=""/> 
           <img className="bg-black" src={zaraImg} alt=""/> 
           <img className="bg-black" src={pradaImg} alt=""/> 
           <img className="bg-black" src={gucciImg} alt=""/> 
       </div>
    </section>
  )
}

export default Logo
