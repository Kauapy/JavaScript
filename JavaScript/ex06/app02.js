function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    res.innerText = (`A soma dos valores ${n1} e ${n2} é igual a ${soma}`)
    if(soma == 0){
        alert("sei larafshr")
        reiniciarJogo()
        return
    }
    var reiniciar = document.getElementById("reiniciar").removeAttribute("disabled")
}

function reiniciarJogo(){
    var alguma = document.getElementById("reiniciar").setAttribute("disabled",true)
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    tn1.value = " "
    tn2.value = " "
    res.innerText = "Aguardando Soma..."
}
