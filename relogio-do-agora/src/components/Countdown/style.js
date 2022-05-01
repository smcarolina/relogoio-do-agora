import styled from "styled-components";

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  border: 1px solid black;
  position: relative;
`;
export const Title = styled.h1`
  /* color: #00ff00; */
`;

export const BannerContainer = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(50%);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 20%;
  padding: 0;
  border: solid 1px;
  text-align: center;
`;

export const TimeSlot = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TimeSlotLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const Item = styled.div`
  list-style: none;
  font-family: "Inter", "Times New Roman", Times, serif;
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem;
  color: #000;
  background: #f1f91b;
  width: 2rem;
`;
