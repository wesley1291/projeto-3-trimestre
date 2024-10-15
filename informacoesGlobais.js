const url = 'https://raw.githubsercontent.com/guilhermehonrails/api/main/dados-globais.js'
console.log(url);

async function visualizarInformacoesGlobais (){
   const res = await fetch(url)
   const dados = await res.json()
   const pessoasConectadas = (dados.total_pessoas_mundo)/1e9
   const pessoasMundo = (dados.total_medio)
   const horas = parseInt(dados.medio)
   const minutos = Math.round ((dados.tempo_medio- horas)*100)
   const porcentagemConectadas = ((pessoasConectadas / pessoasMundo)*100).toFixed(2)
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container_texto')
   paragrafo.innerHTML = `Você sabia que o mundo tem
    <span>${pessoasMundo}</span> de pessoas e 
    que aproximadamente <span>${pessoasConectadas}</span>
     estao conectadas em alguma rede social e passam em media
     <span>${horas}</span> horas e <span>${minutos}</span> minutos conectados.
     <br> Isso significa que aproximadamente ${porcentagemConectadas}%
     de pessoas estao conectadas em alguma rede social.` 
   const container = document.getElementById('graficos-contaiter')
   container.appendChild(paragrafo)
   console.log(dados.tempo_médio)
   
}
visualizarInformacoesGlobais()
{
    "total_pessoas_conectadas"; 5.04e9,
    "total_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
}
