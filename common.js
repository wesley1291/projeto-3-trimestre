import {getcCSS, tickconfig} from "./common.js"
const getcCSS = (variavel) => {
     return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickconfig = {
    color: getcCSS('--primary-color'),
    size: 16,
    family: getcCSS('--font')
}
function criarGrafico(data, layout){
    const grafico = document.createElement ('div')
    grafico.className = 'grafico'
    document.getElementByd('graficos-contaiter')
    .appendchild(grafico)
    Plotly.newPlot(grafico,data, layout)  
}
export {getcCSS,tickconfig,criarGrafico}