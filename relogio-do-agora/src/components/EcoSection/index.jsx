import { FaBicycle, FaLeaf, FaRecycle, FaStore } from "react-icons/fa";
import ecoBackgroundImageSource from "../../assets/img/eco-background.png";
import * as StyledComponent from "./styles";

const cards = [
  {
    Icon: FaRecycle,
    title: "Consumo consciente",
    subtitle: "3R's: Reduza, Reutilize e Recicle",
  },
  {
    Icon: FaStore,
    title: "Use o comércio justo",
    subtitle:
      "Dê preferência a produtos cujo a pegada de carbono foi calculada e reduzida",
  },
  {
    Icon: FaLeaf,
    title: "Promova o autoconsumo",
    subtitle: "Cultive seus próprios alimentos: frutas, legumes, temperos",
  },
  {
    Icon: FaBicycle,
    title: "Use transporte sustentável",
    subtitle:
      "Use transportes coletivos e/ou alternativos (bicicletas, patins, vá a pé...)",
  },
];

export default function EcoSection() {
  return (
    <StyledComponent.EcoSectionContainer>
      <StyledComponent.EcoTitle>
        Os Princípios da Ecologia Social
      </StyledComponent.EcoTitle>

      <StyledComponent.EcoBanner src={ecoBackgroundImageSource} />

      <StyledComponent.EcoCards>
        {cards.map((card, index) => (
          <StyledComponent.EcoCard key={index}>
            <card.Icon size={40} color="#1D801D" />

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
