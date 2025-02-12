import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import ImageComponent from "../ImageComponent"


export default function Home() {
  return (
    <>
    <div id="home" className="flex justify-center items-center h-[80vh] gap-[5rem] ">
      <div className="rounded-full h-[400] w-[400] overflow-hidden flex justify-center ">
      <ImageComponent 
        src="/Profile2.jpg" 
        alt="Profile" 
        width={400} 
        height={600} 
      /></div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[1.5rem] text-[#00000080]">{` Hello ,I'm`}</p>
        <a className="text-[3rem] text-black font-semibold"> 66022477  </a>
        <div className="text-[#000000ad] text-[1.75rem] mb-[10px]">UX/UI Design 66022477</div>
        <div className="flex text-black">
        <button className="text-[2rem] mr-[10px]">
        <a href="https://github.com/Sylveeeeee ">< IoLogoGithub /></a>
          </button>
          <button className="text-[2rem] ">
          <a href="https://www.instagram.com/macklaren_/profilecard/?igsh=MW5kdXlucGRoanoxYg=="><FaInstagram /></a>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
