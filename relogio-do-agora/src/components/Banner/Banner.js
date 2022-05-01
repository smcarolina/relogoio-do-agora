import React from 'react'
import { InfoBanner, Card, Item, Label } from './style'

const Banner = () => {
    return <InfoBanner>
        <Card><Item>79,1</Item><Label>milhões de toneladas de resíduos sólidos, em 2019</Label>
        </Card>
        <Card><Item>13.053</Item><Label>hectares da Mata Atlântica desmatados entre 2019 e 2020</Label></Card>
        <Card><Item>170</Item><Label> toneladas de resíduos têxteis por ano</Label></Card>
        <Card><Item>26</Item> <Label>milhões de toneladas de alimentos desperdiçados por ano</Label></Card>
    </InfoBanner>
}

export default Banner