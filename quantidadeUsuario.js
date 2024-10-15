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
            type: 'bar'
        }
    ]
    const graficos = document.createElement('div')
    graficos.className = 'graficos'
    document.getElementById('graficos-contaiber').appendChild(grafico)
    plotly.newPlot(graficos,data)

    console.log(dados)
}

quantidadeUsuarios()