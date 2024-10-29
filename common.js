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
function incluirTexto(texto){
    const contaiter = document.getElementById
    ('graficos-container');
    const paragrafo = document.greateElement('p')
    paragrafo.classlist.add('grafico-contaiter__texto')
    paragrafo.innHTML = txto 
    contaiter.appendChild(paragrafo)
}
export {getcCSS,tickconfig,criarGrafico,incluirTexto}