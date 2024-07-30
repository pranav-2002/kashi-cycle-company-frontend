import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Cycles from "./components/cycles/Cycles";
import AboutPage from "./components/about/AboutPage";
import Accessories from "./components/accessories/Accessories";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cycles" Component={Cycles} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/accessories" Component={Accessories} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
