var  titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){

    var pacienteAtual = paciente[i];

    var tdPeso = pacienteAtual.querySelector(".info-peso");
    
    var tdAltura = pacienteAtual.querySelector(".info-altura");
    
    var resultado = pacienteAtual.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        resultado.textContent = "Peso inválido";     
        pacienteAtual.style.color = "red";
        continue
    }

    if(!alturaValida){
        resultado.textContent = "Altura inválida";   
        pacienteAtual.style.color = "red";
        continue
    }
    
    var imc = peso / (altura * altura);
    
    resultado.textContent = imc.toFixed(2);
}    

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}


function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

//função de calcular o IMC