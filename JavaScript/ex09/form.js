var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var formularioNome = document.querySelector("#nome").value;
    var formularioPeso = document.querySelector("#peso").value;
    var formularioAltura = document.querySelector("#altura").value;
    var formularioGordura = document.querySelector("#gordura").value;

    var paciente = {
        nome: formularioNome,
        peso: formularioPeso,
        altura: formularioAltura,
        gordura: formularioGordura
    };

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacientesNaTabela(paciente);

    document.querySelector("#form-adiciona").reset();
    document.querySelector(".mensagens-erro").innerHTML = "";
});

function adicionaPacientesNaTabela(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = (paciente.peso / (paciente.altura * paciente.altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function validaPaciente(paciente) {
    var erros = [];

    if (!paciente.nome || paciente.nome.length === 0) erros.push("Adicione o nome do paciente");
    if (!paciente.gordura || paciente.gordura.length === 0) erros.push("Adicione o percentual de gordura do paciente");
    if (!paciente.peso || paciente.peso.length === 0) erros.push("Adicione o peso do paciente");
    if (!paciente.altura || paciente.altura.length === 0) erros.push("Adicione a altura do paciente");

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");

    return erros;
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
