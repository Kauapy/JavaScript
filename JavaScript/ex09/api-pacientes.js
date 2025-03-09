var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })

    xhr.send();
})