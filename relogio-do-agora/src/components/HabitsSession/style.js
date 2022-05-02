import styled from "styled-components";

export const SessionContainer = styled.div`
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
`;

export const HabitContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 4rem;
  padding: 1rem;
  background-color: #595959;
  border-radius: 20px;
`;

export const Title = styled.h3`
  font-family: "Inter";
  color: #f1f91b;
  margin: 15px 60px;
  text-align: center;
`;

export const Lista = styled.ul`
  font-family: "Inter";
  font-weight: bold;
  color: #fff;
  height: fit-content;
  position: relative;

  li + li {
    margin-top: 1rem;
  }
`;

export const Item = styled.li`
  font-family: "Inter";
  list-style: disc;
  height: 100%;
`;
