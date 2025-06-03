import ImageComponent from "../ImageComponent"


export default function About (){
    return (
        <>
         
        <div id="about" className="h-[80vh] gap-[5rem] flex flex-col  justify-center">
            <div className="text-black text-[2.5rem] flex justify-center font-semibold  mb-[40]">About Me</div>
            <div className="flex justify-center items-center  gap-[5rem]">
      <div className="rounded-[20px] h-[300px] w-[300px] overflow-hidden">
      <ImageComponent 
        src="/Profile2.png" 
        alt="Profile" 
        width={300} 
        height={300} 
      /></div>
      <div className="flex flex-col ">
      <div className="flex ">
      <div className="flex flex-col justify-center mr-[40px] border-2 border-[#0000006c] rounded-3xl p-8 w-[350px] ">
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5] "> Name :</h1> Jirawat Tangdan </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Gender :</h1> Male </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Interests :</h1> Fitness ,Gaming </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Personality :</h1> creative ,optimistic </a>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-[#0000006c] rounded-3xl p-8 w-[350px]">   
        <a className="text-[1rem] text-[#000000] flex mb-[10px]"> <h1 className="text-black font-semibold mr-[5px] text-[20px]"> Education </h1> </a>
        <a className="text-[1rem] text-[#000000] flex items-center "> University of Phayao </a>
        <a className="text-[1rem] text-[#000000] flex items-center "> Software Engineering </a>
        </div>
      </div>
        <div className="flex flex-wrap w-[700px] text-black mt-[20px]">Hello! I&apos;m Mack Jirawat, a student passionate about Front-End Development.

I enjoy building responsive and user-friendly websites using tools like React, Tailwind CSS, and JavaScript. I also have experience working with REST APIs and integrating them into real projects.

I value clean UI, attention to detail, and am always eager to learn more through hands-on experience and teamwork.</div>
      </div>
        </div>
        </div>
      
        </>
    )
}