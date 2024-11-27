import Link from "next/link"

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      <>
      <div className="w-full h-[17vh] bg-white flex items-center justify-around text-black font-Roboto scroll-smooth">
        <div className="text-2xl hover:cursor-default">Mack JR</div>
        <div className="flex list-none text-[1.5rem] gap-[2rem] ">
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'About'}>About</Link>
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'Experiennce'}>Experiennce</Link>
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'Projects'}>Projects</Link>
            <Link className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black " href={'Contact'}>Contact</Link>
        </div>
      </div>
      <div className="">{children}</div>
      </>
    )
  }
  