import About from "./About";
import Main from "./Main";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Home()
{
    return(
        <div>
            <Main />
            <About />
            <Projects/>
            <Contact/>
        </div>
    )
}