import styled from "styled-components";

export const InfoBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Inter", "Times New Roman", Times, serif;
  max-width: 200px;
  margin: 10px;
`;

export const Item = styled.li`
  list-style: none;
  font-family: "Inter", "Times New Roman", Times, serif;
  font-size: 3rem;
  font-weight: bold;
  color: #000;
  background: #f1f91b;
  width: fit-content;
  text-align: center;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
`;
