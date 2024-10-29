import {getCSS, criarGrafico} from "./common.js"
import { getcCSS, criarGrafico, incluirTexto } from "./common";
const layout = {
    plot_bgcolor: getcCSS('--bg-color'),
    paper_bgcolor: getcCSS('--bg-color'),
    height: 700,
    title: {
       
    }
}
const grafico = document.createElement ('div')
grafico.className = 'grafico'
document.getElementByd('graficos-contaiter')
.appendchild(grafico)
const config = {
    responsive: true, 
    displayModeBar: false
}
Ploty.newPlot(grafico,data,layout,config)

criarGrafico(date,layout)
incluirTexto(` embora o <span> Instragram</span> ocupe a quarta posição temos
números total de usúarios entre as redes sociais destaca-se como a
<span>preferida dos usúarios</span>. Supera até mesmo o <span> Facebook </span>, a plataforma
com mais usúarios, sendo terceira opcção mais apreciada pelos usúarios.,<br>Essa preferência
evidencia a forte conexão e apreço que as pessoas tem pelo Instagram em coparação 
em outras redes.`)