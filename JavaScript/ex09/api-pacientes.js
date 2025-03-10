var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        if (xhr.status === 200) {  
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacientesNaTabela(paciente);
            });
        } else {
            console.error("Erro ao buscar pacientes:", xhr.status);
            var erro = document.querySelector("#erro-404");
            erro.classList.remove("invisivel");
            erro.style.color = "red";
        }
    });

    xhr.send();
})