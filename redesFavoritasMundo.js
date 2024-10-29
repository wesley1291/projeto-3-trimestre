import { getcCSS } from "./common";

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
Plotly.newPlot(grafico,data,layout) 