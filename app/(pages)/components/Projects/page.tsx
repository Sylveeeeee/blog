import ImageComponent from "next/image";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="min-h-[80vh] flex flex-col justify-center items-center gap-12 px-4 py-8"
    >
      <div className="text-black text-3xl md:text-[2.5rem] font-semibold mb-4 text-center">
        Projects
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        {/* Project One */}
        <div className="flex flex-col justify-center items-center border-2 border-black/40 rounded-[2rem] p-6 w-full md:flex-1 bg-white min-h-[430px]">
          <ImageComponent
            className="rounded-xl mb-4 object-contain w-full h-[400px] md:h-[320px]"
            src="/pirate.png"
            alt="projectone"
            width={400}
            height={220}
          />
          <div className="text-black text-xl md:text-2xl font-bold py-2 text-center">
            Project One
          </div>
          <a
            className="mt-2 hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
            href="https://github.com/Sylveeeeee/Pirate-webe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        {/* Project Two */}
        <div className="flex flex-col justify-center items-center border-2 border-black/40 rounded-[2rem] p-6 w-full md:flex-1 bg-white min-h-[430px]">
          <ImageComponent
            className="rounded-xl mb-4 object-contain w-full h-[200px] md:h-[320px]"
            src="/fitlifehub.png"
            alt="projecttwo"
            width={400}
            height={220}
          />
          <div className="text-black text-xl md:text-2xl font-bold py-2 text-center">
            Project Two
          </div>
          <div className="flex  items-center  gap-2 mt-2">
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://github.com/Sylveeeeee/fitlife-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="hover:text-white text-base md:text-lg px-4 py-2 hover:bg-black text-black/60 border-2 border-black/40 rounded-full transition"
              href="https://fitlife-hub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}