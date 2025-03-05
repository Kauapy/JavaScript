var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

   var formularioNome = document.querySelector("#nome").value;
   var formularioPeso = document.querySelector("#peso").value;
    var formularioAltura = document.querySelector("#altura").value;
   var formularioGordura = document.querySelector("#gordura").value;


   var imc = formularioPeso / (formularioAltura * formularioAltura);

   var pacienteTr = document.createElement("tr"); // Criando Tr
   pacienteTr.classList.add("paciente"); // Adicionando classe para manter o estilo

    
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


    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    calcularIMC(pacienteTr);

    document.querySelector("#form-adiciona").reset();
})





//função de adicionar um paciente na tabela com interatividade do usuário