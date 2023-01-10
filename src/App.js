import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import "./App.css";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
