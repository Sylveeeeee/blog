export default function Footer() {
  return (
    <footer className="w-full h-[100px] bg-[#00000011] flex flex-col items-center justify-center text-black text-center">
      <div className="mb-2">
        © {new Date().getFullYear()} Mack Jirawat. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:maccklaren@gmail.com"
          className="hover:underline"
        >
          Contact
        </a>
        <a
          href="https://github.com/Sylveeeeee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Github
        </a>
        <a
          href="https://www.instagram.com/macklaren_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}