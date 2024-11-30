import ImageComponent from "../components/ImageComponent"


export default function About (){
    return (
        <>
         
        <div className="h-[80vh]">
            <div className="text-black text-[2.5rem] flex justify-center font-semibold my-[40]">About Me</div>
            <div className="flex justify-center items-center  gap-[5rem]">
      <div className="rounded-[20px] h-[300] w-[300] overflow-hidden">
      <ImageComponent 
        src="/Profile2.png" 
        alt="Profile" 
        width={300} 
        height={300} 
      /></div>
      <div className="flex flex-col ">
      <div className="flex ">
      <div className="flex flex-col justify-center mr-[40] border-2 border-[#0000006c] rounded-3xl p-8 w-[350] ">
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5] "> Name :</h1> Jirawat Tangdan </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Gender :</h1> Male </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Interests :</h1> Fitness ,Gaming </a>
        <a className="text-[1rem] text-[#000000] flex "> <h1 className="text-black font-semibold mr-[5]"> Personality :</h1> creative ,optimistic </a>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-[#0000006c] rounded-3xl p-8 w-[350]">   
        <a className="text-[1rem] text-[#000000] flex mb-[10]"> <h1 className="text-black font-semibold mr-[5] text-[20px]"> Education </h1> </a>
        <a className="text-[1rem] text-[#000000] flex items-center "> University of Phayao </a>
        <a className="text-[1rem] text-[#000000] flex items-center "> Software Engineering </a>
        </div>
      </div>
        <div className="flex flex-wrap w-[700] text-black mt-[20]">Lorem ipsum dolor sit amet consectetur  ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus dolor repellendus dolorum voluptatum! Harum facilis ipsam consequatur quisquam aut quos quis nihil eveniet laborum! Obcaecati porro odit unde id.</div>
      </div>
        </div>
        </div>
      
        </>
    )
}