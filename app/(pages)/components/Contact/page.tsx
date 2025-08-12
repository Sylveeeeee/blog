import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-8"
    >
      <div className="text-black text-3xl md:text-[2.5rem] font-semibold mb-8 text-center">
        Contact Me
      </div>
      <div className="flex  justify-center  w-full">
        <div className="flex items-center justify-center border-2 border-black/40 rounded-2xl bg-white w-full max-w-md py-6 px-4">
          <span className="text-black text-3xl md:text-[50px] mr-4">
            <IoMail />
          </span>
          <a
            className="text-lg  md:text-[20px] hover:text-black hover:underline underline underline-offset-4 text-black/50 break-all"
            href="mailto:maccklaren@gmail.com"
          >
            maccklaren@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}