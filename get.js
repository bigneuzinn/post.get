fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json()).then(dados => {

    var tabelaCorpo = document.getElementById('tabela-corpo')

    dados.forEach(objeto => {
        var tr = document.createElement('tr')
        var trId = document.createElement('td')
        var trNome = document.createElement('td')
        var trIdade = document.createElement('td')
        
        //Preencha as celulas da linha 
        trId.innerText = objeto.id
        trNome.innerText = objeto.nome
        trIdade.innerText = objeto.idade

        tr.appendChild(trId)
        tr.appendChild(trNome)
        tr.appendChild(trIdade)
        tabelaCorpo.appendChild(tr)

    });
})
