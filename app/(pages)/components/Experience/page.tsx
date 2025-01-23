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
import ImageComponent from "../ImageComponent";
import Link from "next/link";

export default function Experience() {
  return (
    <>
      <div id="experience" className="flex flex-col justify-center">
        <div className="text-black text-[2.5rem] flex justify-center font-semibold mb-[40px]">
          Experience
        </div>
        <div className="text-black text-[2.5rem] flex font-semibold justify-center mb-[10]">Figma</div>

        {/* Images Section */}
        <div className="flex justify-center flex-wrap w-full mb-20 gap-8">
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">
            <div className="w-[45%]">
              <ImageComponent src="/figma.png" alt="figma" width={500} height={500} />
              <Link href={
                "https://www.figma.com/design/90Hrv41h4q9tH6sN7y53Sq/Exercise-6-Netflix-UI-(%E0%B8%88%E0%B8%B4%E0%B8%A3%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C)?node-id=3816-743&t=gPT3QpZShuJrHQHs-0"
              }>
                <div className="text-black underline underline-offset hover:text-[#00000086] mt-6 text-center">
                  Figma Netflix UI
                </div>
              </Link>
            </div>
            <div className="w-[45%]">
              <ImageComponent src="/figma2.png" alt="figma" width={500} height={500} />
              <Link href={
                "https://www.figma.com/design/AldP8EKNG2w8IjPeeo7kmd/12?node-id=0-1&m=dev&t=E78MtfHxmaQCo1MA-1"
              }>
                <div className="text-black underline underline-offset hover:text-[#00000086] mt-6 text-center">
                Figma Mobile app UI
                </div>
              </Link>
            </div>
            <div className="w-[45%]">
              <ImageComponent src="/figma3.png" alt="figma" width={500} height={500} />
              <Link href={
                "https://www.figma.com/design/AahXTq6rhwJ2Cbk8PnDURP/%E0%B8%88%E0%B8%B4%E0%B8%A3%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C?node-id=2201-120&m=dev&t=8O7wDvQTSyijg7jN-1"
              }>
                <div className="text-black underline underline-offset hover:text-[#00000086] mt-6 text-center">
                Figma Mobile plant sales app UI
                </div>
              </Link>
            </div>
            <div className="w-[45%]">
              <ImageComponent src="/figma4.png" alt="figma" width={500} height={500} />
              <Link href={
                "https://www.figma.com/design/53Wp03Tkb7SfT6MlGsqCiD/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%B2?node-id=0-1&m=dev&t=Gx2iEiWPImXNzIca-1"
              }>
                <div className="text-black underline underline-offset hover:text-[#00000086] mt-6 text-center">
                Figma Cart WireFrame
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className="text-black text-[2.5rem] flex font-semibold justify-center mb-[10]">Skill</div>
        <div className="flex justify-center">
          <div className="text-black border-2 border-[#0000006c] rounded-xl px-20 flex flex-col w-[80%] py-[40px]">
            <div className="flex justify-between mb-[50px]">
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoHtml5 />
                </div>
                <h1>HTML</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoCss3 />
                </div>
                <h1>CSS</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoJavascript />
                </div>
                <h1>Javascript</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoNodejs />
                </div>
                <h1>Nodejs</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoPython />
                </div>
                <h1>Python</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <IoLogoReact />
                </div>
                <h1>React</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <BiLogoVuejs />
                </div>
                <h1>Vuejs</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <BiLogoTailwindCss />
                </div>
                <h1>TailwindCss</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <BiLogoTypescript />
                </div>
                <h1>Typescript</h1>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-[50px] mb-[10]">
                  <RiNextjsFill />
                </div>
                <h1>Nextjs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}