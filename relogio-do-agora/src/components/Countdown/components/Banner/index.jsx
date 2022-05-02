import React from "react";
import { Card, InfoBanner, Item, Label } from "./style";

const cards = [
  {
    item: "79,1",
    label: "Milhões de toneladas de resíduos sólidos em 2019",
  },
  {
    item: "13.053",
    label: "Hectares da mata Atlântica desmatados entre 2019 e 2020",
  },
  {
    item: "26",
    label: "Milhões de toneladas de alimentos desperdiçados por ano",
  },
  {
    item: "170",
    label: "Toneladas de resíduos têxteis por ano",
  },
];

const Banner = () => {
  return (
    <InfoBanner>
      {cards.map((card, index) => (
        <Card key={index}>
          <Item>{card.item}</Item>
          <Label>{card.label}</Label>
        </Card>
      ))}
    </InfoBanner>
  );
};

export default Banner;
