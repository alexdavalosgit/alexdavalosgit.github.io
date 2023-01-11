import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import "./App.css";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
