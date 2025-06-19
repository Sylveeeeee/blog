import About from "./components/About/page";
import Experience from "./components/Experience/page";
import Contact from "./components/Contact/page";
import Home from "./components/Home/page";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/footer/page";
import Projects from "./components/Projects/page";
export default function page() {
  return (
    <>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <ScrollToTopButton/>
    <Footer/>
    </>
  );
}
