import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Recommendations from "./components/Recommendations";


function App() {
  return (
    <div className="text-3xl font-bold mx-auto max-w-5xl my-10">
      <NavBar />
      <Home />
      <About />
      <Recommendations />
    </div>
  );
}

export default App;
