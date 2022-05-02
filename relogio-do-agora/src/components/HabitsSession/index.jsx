import React from "react";
import * as StyledComponent from "./style";

const habits = [
  {
    title: "O que faço que contribui para diminuir o tempo que nos resta?",
    items: [
      "Desperdício de alimentos",
      "Descarte incorreto do lixo, sem separação do que pode ser reciclado",
      "Uso excessivo de ar-condicionado",
      "Gasto excessivo de água",
      "Consumo excessivo de roupas (fast fashion)",
      "Abuso do uso de automóveis particulares",
      "Uso de embalagens e sacolas plásticas sem necessidade",
      "Uso de veículos com altas emissões de CO2",
    ],
  },
  {
    title: "O que posso fazer para aumentar nosso tempo?",
    items: [
      "Fazer compostagem doméstica",
      "Separar e descartar corretamente lixo eletrônico (eletrodomésticos, eletrônicos, pilhas e baterias)",
      "Contratar serviços de eletricidade a partir de fontes renováveis",
      "Optar por equipamentos com melhor eficiência energética (iluminação de LED, por exemplo)",
      "Reduzir consumo de utensílios descartáveis",
      "Contratar serviços de empresas que investem em tecnologias sustentáveis",
      "Optar por usar produtos de limpeza menos poluentes e que consomem menos água durante a produção",
      "Implantar sistema de aproveitamento de água da chuva",
    ],
  },
];

const HabitsSession = () => {
  return (
    <StyledComponent.SessionContainer>
      {habits.map((habit, i1) => (
        <StyledComponent.HabitContainer key={i1}>
          <StyledComponent.Title>{habit.title}</StyledComponent.Title>
          <StyledComponent.Lista>
            {habit.items.map((item, i2) => (
              <StyledComponent.Item key={i2}>{item}</StyledComponent.Item>
            ))}
          </StyledComponent.Lista>
        </StyledComponent.HabitContainer>
      ))}
    </StyledComponent.SessionContainer>
  );
};

export default HabitsSession;
