import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Cycles from "./components/cycles/Cycles";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cycles" Component={Cycles} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
