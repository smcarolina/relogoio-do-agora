import React from "react";
import { HabitContainer, Item, Lista, SessionContainer, Title } from "./style";

const HabitsSession = () => {
    return <SessionContainer>
        
        <HabitContainer>
            <Title>O que faço que contribui para diminuir o tempo que nos resta</Title>

            <Lista>
                <Item>Desperdício de alimentos</Item>
                <Item>Descarte incorreto do lixo, sem separação do que pode ser reciclado</Item>
                <Item>Uso excessivo de ar-condicionado</Item>
                <Item>Gasto excessivo de água</Item>
                <Item>Consumo excessivo de roupas (fast fashion)</Item>
                <Item>Abuso do uso de automóveis particulares</Item>
                <Item>Uso de embalagens e sacolas plásticas sem necessidade</Item>
                <Item>Uso de veículos com altas emissões de CO2</Item>
            </Lista>
        </HabitContainer>
        <HabitContainer>
            <Title>O que posso fazer para aumentar nosso tempo</Title>
            <Lista>
                <Item>Fazer compostagem doméstica</Item>
                <Item>Separar e descartar corretamente lixo eletrônico (eletrodomésticos, eletrônicos, pilhas e baterias)</Item>
                <Item>Contratar serviços de eletricidade a partir de fontes renováveis</Item>
                <Item>Optar por equipamentos com melhor eficiência energética (iluminação de LED, por exemplo)</Item>
                <Item>Reduzir consumo de utensílios descartáveis</Item>
                <Item>Contratar serviços de empresas que investem em tecnologias sustentáveis</Item>
                <Item>Optar por usar produtos de limpeza menos poluentes e que consomem menos água durante a produção</Item>
                <Item>Implantar sistema de aproveitamento de água da chuva</Item>
            </Lista>
        </HabitContainer>
        
    </SessionContainer>
} 

export default HabitsSession