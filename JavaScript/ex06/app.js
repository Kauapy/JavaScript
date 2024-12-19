var área = document.getElementById('area')
área.addEventListener('click',clicar)
área.addEventListener('mouseenter',entrar)
área.addEventListener('mouseout', sair)
function clicar(){
    área.innerText = 'Clicou'
    área.style.background = "Green"
}

function entrar(){
    área.innerText = "Entrou"
    área.style.background = "Yellow"
}

function sair(){
    área.innerText = "Saiu"
    área.style.background = "Red"
}