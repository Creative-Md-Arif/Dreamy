/* eslint-disable react/prop-types */


const Title = ( {title}) => {
  return (
    <div className="flex items-center justify-center pt-[115px] pb-[55px]">
       <div>
       <h1 className=" font-headingFont text-[48px] text-black font-bold ">{title}</h1>
       </div>
    </div>
  )
}

export default Title
