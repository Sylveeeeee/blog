import About from "./About/page";
import Experience from "./Experience/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function page() {
  return (
    <>
    <Home/>
    <About/>
    <Experience/>
    <Contact/>
    <ScrollToTopButton/>
    </>
  );
}
