import React from "react";
import Clock from "./components/Countdown";
import EcoSection from "./components/EcoSection";
import Footer from "./components/Footer";
import HabitsSession from "./components/HabitsSession";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Clock id="home" />
      <HabitsSession />
      <EcoSection />
      <Footer />
    </>
  );
};

export default App;
