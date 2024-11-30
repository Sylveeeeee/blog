import Link from "next/link"

export default function Menu(){

    return (
      <>
      <div className="xl:hidden h-[17vh] bg-white flex items-center justify-around text-black font-Roboto scroll-smooth">
        <div className=""></div>
        <div className="inline-block relative ">
            <button className="flex flex-col justify-between h-[24px] w-[30px] ">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="flex list-none text-[1.5rem] gap-[2rem] ">
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'About'}>ssssAbout</Link>
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'Experience'}>Experience</Link>
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'Contact'}>Contact</Link>
            </div>
        </div>
      </div>
      </>
    )
  }