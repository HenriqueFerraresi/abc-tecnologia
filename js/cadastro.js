'use scrict'

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

/* Programação de evento do Formulário  */ 
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    /* Montando um objeto JavaScript com os valores capturados dos campos formulário  */
    let dados = {
        nome : campoNome.value,
        data : campoData.value,
        telefone : campoTelefone.value,
        email : campoEmail.value,

        /* A instrução a baixo permite pegar o titulo (tectContent) apenas de vaga que foi selecionada (selectedOptions [0]) dentro da lista de vagas (campoVaga) */
        vaga : campoVaga.selectedOptions[0].textContent
    };
    
    /* Ajax (técnica de comunicação)
    Endpoint de candidatos */
    fetch('http://localhost:3000/candidatos', {
        
        // Definimos o método de transmissão dos dados
        method: "POST", // POST envia, GET recebe (padrão)
        
        // Convertemos o objeto JS em objeto JSON
        body: JSON.stringify(dados),

        // Indicamos no cabeçalho da mensagem o formato de dados
        headers: {
            "Content-type" : "application/json"
        }
    })


/* 2) Resposta da API transformada em JSON */
.then(resposta => resposta.json())

/* 3) Exibindo mensagem final do processo */
.then( () => alert("Dados cadastrados com sucesso!") );
});