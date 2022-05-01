import React, { useEffect, useState } from 'react'
import { renderClock } from './script';
import { List, Title, ClockContainer } from './style';



const Clock = () => {
    return <ClockContainer>
        <Title>Relogio do Amanhã</Title>

        <List>
            {renderClock()}
        </List>
        <p>De acordo com o último <a target={"_blank"} href="https://www.ipcc.ch/site/assets/uploads/2019/07/SPM-Portuguese-version.pdf">relatório do IPCC</a>, o mundo inteiro precisa se unir e zerar, até 2050, as emissões de gás carbônico e reduzir pela metade as emissões de gás metano para previnir o desastre ambiental para o qual estamos nos dirigindo e termos a chance de amenizar os impactos das mudanças climáticas no planeta. Para termos essa chance, precisamos reduzir em, no mínimo, 43% as emissões de CO2 até 2030.</p>
        <p>O Relógio do Amanhã marca quanto tempo temos para agir e salvar nosso lar.</p>
        <p>Esse é um esforço coletivo, que depende não só da população, mas, principalmente de políticas públicas e ações da iniciativa privada. A curto prazo, a preservação ambiental não interessa ao mercado financeiro, e é vista como gasto. Mas o preço cobrado no futuro pela falta de ações hoje será catastrófico.</p>
        <p>Descubra aqui formas de contribuir e ajudar a preservar o planeta!</p>
    </ClockContainer>
}

export default Clock;