// Função para emviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuario
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value

    //Enviar uma função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas',{
       method: 'POST', //Metodo POST
       headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON(padrão)
       },
        body: JSON.stringify({nome: nome, idade: idade}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON
 }