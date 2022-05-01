import ecoBackgroundImageSource from "../../assets/img/eco-background.png";
import * as StyledComponent from "./styles";

const cards = [
  {
    icon: "",
    title: "Consumo consciente",
    subtitle: "3R's: Reduza, Reutilize e Recicle",
  },
  {
    icon: "",
    title: "Use o comércio justo",
    subtitle:
      "Dê preferência a produtos cujo a pegada de carbono foi calculada e reduzida",
  },
  {
    icon: "",
    title: "Promova o autoconsumo",
    subtitle: "Cultive seus próprios alimentos: frutas, legumes, temperos",
  },
  {
    icon: "",
    title: "Use transporte sustentável",
    subtitle:
      "Use transportes coletivos e/ou alternativos (bicicletas, patins, vá a pé...)",
  },
];

export default function EcoSection() {
  return (
    <StyledComponent.EcoSectionContainer>
      <StyledComponent.EcoTitle>
        Os principios da ecologia social
      </StyledComponent.EcoTitle>

      <StyledComponent.EcoBanner src={ecoBackgroundImageSource} />

      <StyledComponent.EcoCards>
        {cards.map((card, index) => (
          <StyledComponent.EcoCard key={index}>
            <StyledComponent.EcoCardIcon src={card.icon} />

            <StyledComponent.EcoCardTitle>
              {card.title}
            </StyledComponent.EcoCardTitle>

            <StyledComponent.EcoCardSubtitle>
              {card.subtitle}
            </StyledComponent.EcoCardSubtitle>
          </StyledComponent.EcoCard>
        ))}
      </StyledComponent.EcoCards>
    </StyledComponent.EcoSectionContainer>
  );
}
