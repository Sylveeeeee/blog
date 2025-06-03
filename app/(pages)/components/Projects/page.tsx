import ImageComponent from "next/image"

export function Project() {
  return (
    <>
      <div id="Projects" className="h-[80vh] flex flex-col justify-center gap-[5rem] items-center">
        <div className="text-black text-[2.5rem] flex justify-center font-semibold ">
          Projects
        </div>    
        <div className="flex justify-center  items-center gap-[50px]">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-[#0000006c] rounded-[50px]   p-[30px]">
            <ImageComponent className="rounded-[20px]  overflow-hidden"
                    src="/pirate.png" 
                    alt="projectone" 
                    width={500} 
                    height={500} 
                  />  
          <div className="text-black text-[2rem] font-bold py-6">Project One</div>      
            <a
              className=" hover:text-white text-[20px] px-4 py-2 hover:bg-black  text-[#0000007c] border-2 border-[#0000006c] rounded-full"
                href=" https://github.com/Sylveeeeee/Pirate-webe ">
              Github
            </a>
            
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-[#0000006c] rounded-[50px]   p-[30px]">
            <ImageComponent className="rounded-[20px]  overflow-hidden"
                    src="/fitlifehub.png" 
                    alt="projecttwo" 
                    width={650} 
                    height={500} 
                  />  
          <div className="text-black text-[2rem] font-bold py-6 ">Project Two</div> 
          <div className="flex ">    
            <a
              className="mr-[10px] hover:text-white text-[20px] px-4 py-2 hover:bg-black  text-[#0000007c] border-2 border-[#0000006c] rounded-full"
                href=" https://github.com/Sylveeeeee/fitlife-hub">
              Github
            </a>
            <a
              className=" hover:text-white text-[20px] px-4 py-2 hover:bg-black  text-[#0000007c] border-2 border-[#0000006c] rounded-full"
                href="https://fitlife-hub.vercel.app">
              Live Demo
            </a>
            </div> 
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
    
