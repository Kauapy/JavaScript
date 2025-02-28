var lista = []
var maximo = 20
var secreto = gerarNumeroAleatorio()

var a = document.querySelector("h1");

var reiniciarBotao = document.querySelector("#reiniciar")

function verificarChute(){
    var chute = document.querySelector("input").value
    if(chute == secreto){
        exibirTextoNaTela("h1", "Acertou")
        exibirTextoNaTela("p", "Parabens você acertou")
        reiniciarBotao.removeAttribute("disabled")
    }
    else if(chute > secreto){
        exibirTextoNaTela("p", "O número está maior que o número secreto")
    }else{
        exibirTextoNaTela("p", "O número está menor que o número secreto")
    }
}

function exibirTextoNaTela(tag, texto){
    var campo = document.querySelector(tag);
    campo.textContent = texto
}


function gerarNumeroAleatorio(){
    var numero = parseInt(Math.random() * (maximo) + 1);
    var quantidadeLista = lista.length;
    
    if(quantidadeLista == maximo){
        lista = []
    }
    
    if(lista.includes(numero)){
        return gerarNumeroAleatorio();
    }else{
        lista.push(numero)
        console.log(lista)
        return numero;
    }
}

function reiniciarJogo(){
    location.reload();
}
