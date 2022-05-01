import styled from 'styled-components'

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    /* color: #00ff00; */
`

export const List = styled.ul`
display: flex;
/* flex-c: repeat(auto-fit, minmax(280px, 480px)); */
justify-content: center;
gap: 10px;
padding: 10px;
`

export const Item = styled.li`
list-style: none;
font-family: 'Times New Roman', Times, serif;
font-style: italic;
padding: 1rem;
color:#00ff00;
background: #1e1e1e ;
border-radius: 5px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
text-align: center;
`