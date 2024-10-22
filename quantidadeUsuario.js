import { getcCSS } from "./common"
async function quantidadeUsuarios(){
    const url = 'https;//raw.githubserconect.com/guilhermeonrails/api/main/numero-usuarios.json' 
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDaredes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
     
    const data = [
        {
            x: nomeDaredes,
            y:quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getcCSS('--primary-color')
            }
        }
    ]
    const graficos = document.createElement('div')
    graficos.className = 'graficos'
    document.getElementById('graficos-contaiber').appendChild(grafico)
    plotly.newPlot(graficos,data, layout)

}
const layout = {
    plot_bgcolor: getcCSS('--bg-color'),
    paper_bgcolor: getcCSS('--bg-color'),
    title:{
        text : 'Redes socias com mais usúarios do mundo',
        x: 0,
        font: {
            color: getcCSS('--primary-color'),
            family: getcCSS('--font'),
            size: 30
        }
    },
    xaxis:{
            color: getcCSS('--primary-color'),
            size: 16,
            family:getcCSS('--font')
        },
        tickfont:{ tickConfig,
     title:{
        text:'nome das redes sociasi',
        font:{
            color: getcCSS('--secundary-color')
        }
     }
    },
    yaxis:{
        ickfont:{ tickConfig,
        title:{
            text: 'bilhôes de usúarios ativos',
            font:{
                color: getcCSS('--secundary-color')
            }
        }

    }
}
}
quantidadeUsuarios()