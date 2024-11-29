import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import ImageComponent from './components/ImageComponent';
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
    <Menu />
    <div className="flex justify-center items-center h-[80vh] gap-[5rem]">
      <div className="rounded-full h-[400] w-[400] overflow-hidden">
      <ImageComponent 
        src="/Profile2.png" 
        alt="Profile" 
        width={400} 
        height={400} 
      /></div>
      <div className="flex flex-col items-center justify-center">
        <a className="text-[1.75rem] text-[#00000080]"> Hello ,I'm</a>
        <a className="text-[3rem] text-black"> Mack JR </a>
        <div className="flex text-black">
        <button className="text-[2rem] mr-[10]">
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
