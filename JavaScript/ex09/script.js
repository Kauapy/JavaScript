var  titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){

    var pacienteAtual = paciente[i];

    var tdPeso = pacienteAtual.querySelector(".info-peso");
    
    var tdAltura = pacienteAtual.querySelector(".info-altura");
    
    var resultado = pacienteAtual.querySelector(".info-imc")
    
    var peso = tdPeso.textContent;
    
    var altura = tdAltura.textContent;
    
    if(peso < 0 || peso > 1000){
        alert("Peso inválido")
    }
    
    
    var imc = peso / (altura * altura);
    
    resultado.textContent = imc.toFixed(2);
}    


