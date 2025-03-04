var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

   var formularioNome = document.querySelector("#nome").value;
   var formularioPeso = document.querySelector("#peso").value;
    var formularioAltura = document.querySelector("#altura").value;
   var formularioGordura = document.querySelector("#gordura").value;


    var pacienteTr = document.createElement("tr");

    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = formularioNome;
    pesoTd.textContent = formularioPeso;
    alturaTd.textContent = formularioAltura;
    gorduraTd.textContent = formularioGordura;
    imcTd.textContent = imc.toFixed(2);


    pacienteTr.appendChild(nomeTd); 
    pacienteTr.appendChild(pesoTd); 
    pacienteTr.appendChild(alturaTd); 
    pacienteTr.appendChild(gorduraTd); 
    pacienteTr.appendChild(imcTd); 


    var tabela = document.querySelector("#tabela-pacientes")
    
    tabela.appendChild(pacienteTr);
})
