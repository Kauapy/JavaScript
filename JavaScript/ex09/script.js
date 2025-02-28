var  titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");

var tdAltura = paciente.querySelector(".info-altura");

var resultado = paciente.querySelector(".info-imc")

var peso = tdPeso.textContent;

var altura = tdAltura.textContent;

if(peso < 0 || peso > 1000){
    alert("Peso inválido")
}


var imc = peso / (altura * altura);

resultado.textContent = imc;



