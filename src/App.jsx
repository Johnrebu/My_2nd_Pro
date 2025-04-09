import React from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Approach from "./components/Approach/Approach.jsx";
import Team from "./components/Team/Team.jsx";
import Demat from "./components/Demat/Demat.jsx";
import BasicDetails from "./components/BasicDetails/BasicDetails.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footer2 from "./components/Footer2/Footer2.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Approach />
      <Team />
      <Demat />
      <BasicDetails />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default App;
