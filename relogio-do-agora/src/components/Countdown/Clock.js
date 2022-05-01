import React, { useEffect, useState } from 'react'
import { renderClock } from './script';
import { List, Title, ClockContainer } from './style';



const Clock = () => {
    return <ClockContainer>
        <Title>Relogio do Amanhã</Title>

        <List>
            {renderClock()}
        </List>
    </ClockContainer>
}

export default Clock;