import styled from 'styled-components'

export const SessionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    /* border: 1px solid black; */
    height: 100vh;
    width: 80%;
`

export const HabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* text-align: center; */
    width: 35%;
    height: fit-content;
    /* border: 1px solid black; */
    background-color: #595959;
    border-radius: 20px;
`

export const Title = styled.h3`
    font-family: 'Inter';
    color: #f1f91b;
    margin: 15px 60px;
    text-align: center;
`

export const Lista = styled.ul`
    font-family: 'Inter';
    font-weight: bold;
    color: #fff;
`

export const Item = styled.li`
    font-family: 'Inter';
`