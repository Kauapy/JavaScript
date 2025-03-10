var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando Pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        var erro = document.querySelector("#erro-404");
        if (xhr.status === 200) {  
            erro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacientesNaTabela(paciente);
            });
        } else {
            console.error("Erro ao buscar pacientes:", xhr.status);
            erro.classList.remove("invisivel");
            erro.style.color = "red";
        }
    });

    xhr.send();
})