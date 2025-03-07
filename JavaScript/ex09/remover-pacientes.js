var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.closest("tr")



    if(paiDoAlvo){
        paiDoAlvo.classList.add("fadeOut");
        setTimeout(function() {
            paiDoAlvo.remove();
        }, 500);
        
    }
});

