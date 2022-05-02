import React from "react";
import bannerImageSource from "../../assets/img/banner.png";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import { BannerContainer, ClockContainer } from "./style";

const Clock = () => {
  return (
    <ClockContainer>
      <BannerContainer
        src={bannerImageSource}
        alt="Banner mostrando uma foto do planeta terra"
      />
      <Timer />
      <Banner />
    </ClockContainer>
  );
};

export default Clock;
