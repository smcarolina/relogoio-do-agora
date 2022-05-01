import React from "react";
import styled from "styled-components";
import Clock from "./components/Countdown/Clock";
import EcoSection from "./components/EcoSection";
import Footer from "./components/Footer/Footer";
import HabitsSession from "./components/HabitsSession/HabitsSession";
import Header from "./components/Header/Header";

const App = () => {
  const Screen = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <Screen>
      <Header />
      <Clock id="home" />
      <HabitsSession />
      <EcoSection />
      <Footer />
    </Screen>
  );
};

export default App;
