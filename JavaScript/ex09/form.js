var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

   var formularioNome = document.querySelector("#nome").value;
   var formularioPeso = document.querySelector("#peso").value;
    var formularioAltura = document.querySelector("#altura").value;
   var formularioGordura = document.querySelector("#gordura").value;

   var paciente = {
    formularioNome: formularioNome,
    formularioPeso: formularioPeso,
    formularioAltura: formularioAltura,
    formularioGordura: formularioGordura
};


   var imc = formularioPeso / (formularioAltura * formularioAltura);

   pacienteTr.classList.add("paciente"); // Adicionando classe para manter o estilo

    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
   }
 
    var nomeTd = document.createElement("td");  // Criando Td
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = formularioNome;
    pesoTd.textContent = formularioPeso;
    alturaTd.textContent = formularioAltura;
    gorduraTd.textContent = formularioGordura;
    imcTd.textContent = imc.toFixed(2);


    pacienteTr.appendChild(nomeTd);  //Adicionando informações na tabela
    pacienteTr.appendChild(pesoTd); 
    pacienteTr.appendChild(alturaTd); 
    pacienteTr.appendChild(gorduraTd); 
    pacienteTr.appendChild(imcTd);

   adicionaPacientesNaTabela(paciente);

    document.querySelector("#form-adiciona").reset();
    var mensagensErro = document.querySelector(".mensagens-erro");
    mensagensErro.innerHTML = ""; 

    calcularIMC(pacienteTr);

    document.querySelector("#form-adiciona").reset();
})


function adicionaPacientesNaTabela(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;  // Corrigido para acessar a chave correta do JSON
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = (paciente.peso / (paciente.altura * paciente.altura)).toFixed(2); 

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function validaPaciente(paciente){

    var erros = [];

    if (!paciente.formularioNome || paciente.formularioNome.length === 0) erros.push("Adicione o nome do paciente");
 
    if (!paciente.formularioGordura || paciente.formularioGordura.length === 0) erros.push("Adicione o percentual de gordura do paciente");
    
    if(!paciente.formularioPeso || paciente.formularioPeso.length === 0) erros.push("Adicione o peso do paciente")
    
    if(!paciente.formularioAltura || paciente.formularioAltura.length === 0) erros.push("Adicione a altura do paciente")

    if (!validaPeso(paciente.formularioPeso)) erros.push("Peso inválido!");

    if (!validaAltura(paciente.formularioAltura)) erros.push("Altura inválida!");
    

    return erros;
}



function exibeMensagemDeErro(erros){
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


//função de adicionar um paciente na tabela com interatividade do usuário