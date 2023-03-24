import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PreAutomation from "./components/PreAutomation ";
import PostAutomation from "./components/PostAutomation";
import IncreasingProcess from "./components/IncreasingProcess";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="position-relative d-flex flex-column min_100_xl">
        <Navbar />
        <MainSection />
        <PreAutomation />
      </div>
      <PostAutomation />
      <IncreasingProcess />
      <Footer />
    </>
  );
}

export default App;
