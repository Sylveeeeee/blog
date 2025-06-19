import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { BiLogoVuejs, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { icon: <IoLogoHtml5 />, label: "HTML" },
  { icon: <IoLogoCss3 />, label: "CSS" },
  { icon: <IoLogoJavascript />, label: "Javascript" },
  { icon: <IoLogoNodejs />, label: "Nodejs" },
  { icon: <IoLogoPython />, label: "Python" },
  { icon: <IoLogoReact />, label: "React" },
  { icon: <BiLogoVuejs />, label: "Vuejs" },
  { icon: <BiLogoTailwindCss />, label: "TailwindCss" },
  { icon: <BiLogoTypescript />, label: "Typescript" },
  { icon: <RiNextjsFill />, label: "Nextjs" },
];

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center gap-12 min-h-[80vh] px-4 py-8"
    >
      <div className="text-black text-3xl md:text-[2.5rem] font-semibold text-center">
        Experience
      </div>
      <div className="w-full max-w-5xl flex justify-center">
        <div className="text-black border-2 border-black/40 rounded-xl bg-white w-full py-8 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center w-24 md:w-32"
              >
                <div className="text-[40px] md:text-[50px] mb-2">{skill.icon}</div>
                <span className="text-base md:text-lg text-center">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}