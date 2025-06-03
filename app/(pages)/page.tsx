import About from "./components/About/page";
import Experience from "./components/Experience/page";
import Contact from "./components/Contact/page";
import Home from "./components/Home/page";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/footer/page";
import { Project } from "./components/Projects/page";

export default function page() {
  return (
    <>
    <Home/>
    <About/>
    <Project/>
    <Experience/>
    <Contact/>
    <ScrollToTopButton/>
    <Footer/>
    </>
  );
}
