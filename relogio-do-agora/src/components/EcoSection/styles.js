import styled from "styled-components";

export const EcoSectionContainer = styled.section`
  width: 1150px;
  margin: 0 auto;
  position: relative;
`;

export const EcoTitle = styled.h2`
  width: 350px;
  margin: 8rem auto 4rem;
  font-size: 2rem;
  color: #1d801d;
  text-align: center;
`;

export const EcoBanner = styled.img`
  position: absolute;
  left: calc((1150px - 748px) / 2);
  z-index: -1;
`;

export const EcoCards = styled.ul`
  display: grid;
  grid: "card-1 card-2" "card-3 card-4" / 300px 300px;
  justify-content: space-between;
  gap: 200px;
`;

export const EcoCard = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
`;

export const EcoCardTitle = styled.strong`
  font-size: 1.5rem;
  font-family: "Inter";
  margin-top: 1rem;
  color: #1d801d;
`;

export const EcoCardSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #303030;
`;
