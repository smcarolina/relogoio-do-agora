import React from 'react'
import styled from 'styled-components';
import Banner from './components/Banner/Banner';
import Clock from './components/Countdown/Clock';
import Header from './components/Header/Header'

const App = () => {

  const Screen = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  return (
    <Screen>
      <Header/>
      <Clock/>
      <Banner/>
    </Screen>
  );
}

export default App;
