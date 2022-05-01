import styled from 'styled-components'

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100vh;
    border: 1px solid black;
`
export const Title = styled.h1`
    /* color: #00ff00; */
`

export const List = styled.ul`
display: flex;
/* flex-c: repeat(auto-fit, minmax(280px, 480px)); */
justify-content: center;
gap: 10px;
/* padding: 10px; */
`

export const Item = styled.li`
list-style: none;
font-family: 'Inter', 'Times New Roman', Times, serif;
font-size: 3rem;
font-weight: bold;
padding: 1rem;
color:#000;
background: #f1f91b ;

text-align: center;
`