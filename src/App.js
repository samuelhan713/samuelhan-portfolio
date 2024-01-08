import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="text-3xl font-bold mx-auto max-w-5xl my-10">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Recommendations />
    </div>
  );
}

export default App;
