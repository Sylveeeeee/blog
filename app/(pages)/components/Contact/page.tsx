import { IoMail } from "react-icons/io5";

export default function Contact() {
    return (
      <>
       
      <div id="contact" className="h-[80vh] gap-[5rem] flex flex-col  justify-center">
      <div className="text-black text-[2.5rem] flex justify-center font-semibold mb-[40px]">Contact Me</div>
      <div className="flex justify-center">
      <div className="flex justify-center items-center border-2 border-[#0000006c] rounded-2xl w-[400px] py-[20px]">
      <div className=" text-black text-[50px] mr-[10px]">
        <IoMail /></div>
      <a className="hover:text-black text-[20px] hover:underline hover:underline-offset-[6px] underline underline-offset-[6px] text-[#0000007c]" href="mailto:maccklaren@gmail.com">maccklaren@gmail.com </a>
      </div>
      </div>
      </div>
      </>
    );
  }
  