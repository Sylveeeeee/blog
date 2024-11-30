import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoVuejs } from "react-icons/bi";   
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

export default function Experience (){
    return (
        <>
        
        <div className="h-[80vh]">
        <div className="text-black text-[2.5rem] flex justify-center font-semibold mb-[40]">Experience</div>
        <div className="flex justify-center">
        <div className="text-black border-2 border-[#0000006c] rounded-xl px-20 flex flex-col w-[80%] py-[40]">
        <div className="flex justify-between mb-[50] ">
        <div className="flex items-center flex-col "><div className="text-[50px] mb-[10]"><IoLogoHtml5 /></div><h1>HTML</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><IoLogoCss3 /></div><h1>CSS</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><IoLogoJavascript /></div><h1>Javascript</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><IoLogoNodejs /></div><h1>Nodejs</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><IoLogoPython /></div><h1>Python</h1></div>
        </div>
        <div className="flex justify-between  ">
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><IoLogoReact /></div><h1>React</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><BiLogoVuejs /></div><h1>Vuejs</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><BiLogoTailwindCss /></div><h1>TailwindCss </h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><BiLogoTypescript /></div><h1>Typescript</h1></div>
        <div className="flex items-center flex-col"><div className="text-[50px] mb-[10]"><RiNextjsFill /></div><h1>Nextjs</h1></div>
        </div>
        </div>
        </div>
        </div>
         
        </>
        
    )
}