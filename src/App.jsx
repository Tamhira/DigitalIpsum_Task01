import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Service from "./components/Services";
import Work from "./components/Work";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#F5F6F8]">
        <Navigation></Navigation>
        <Home></Home>
        <Service></Service>
        <Work></Work>
        <HowItWorks></HowItWorks>
        <Plans></Plans>
        <Clients></Clients>
        <Team></Team>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
