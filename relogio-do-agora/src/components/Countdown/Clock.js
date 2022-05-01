import React, { useEffect } from 'react'
import { finalDate } from './script';
import { List, Title, Item, ClockContainer } from './style';



const Clock = () => {

    const renderClock = () => {
        return finalDate.total.map((tempo) => {
            return <Item>{tempo}</Item>
        })
    }


    return <ClockContainer>
        <Title>Relogio do Amanhã</Title>

        <List>
            {renderClock()}
        </List>
    </ClockContainer>
}

export default Clock;