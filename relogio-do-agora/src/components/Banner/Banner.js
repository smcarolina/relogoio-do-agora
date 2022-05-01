import React from 'react'
import { InfoBanner, Card, Item } from './style'

const Banner = () => {
    return <InfoBanner>
        <Card><Item>79,1</Item>milhões de toneladas de resíduos sólidos, em 2019
        </Card>
        <Card><Item>13.053</Item>hectares da Mata Atlântica desmatados entre 2019 e 2020</Card>
        <Card><Item>170</Item> toneladas de resíduos têxteis por ano</Card>
        <Card><Item>26</Item> milhões de toneladas de alimentos desperdiçados por ano</Card>
    </InfoBanner>
}

export default Banner