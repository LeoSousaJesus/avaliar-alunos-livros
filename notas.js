var alunos = [];

function adicionarAluno() {
    var nome = document.getElementById("nomeAluno").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    if (nome === "" || isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, preencha o nome do aluno e as notas corretamente.");
        return;
    }

    var media = (nota1 + nota2) / 2;
    var aluno = { nome: nome, nota1: nota1, nota2: nota2, media: media };
    alunos.push(aluno);

    atualizarListaAlunos();
    limparCampos();
}

function atualizarListaAlunos() {
    var listaAlunos = document.getElementById("listaAlunos");
    listaAlunos.innerHTML = "";

    alunos.forEach(function(aluno) {
        var alunoHTML = document.createElement("div");
        alunoHTML.classList.add("aluno");
        alunoHTML.innerHTML = "<strong>Nome:</strong> " + aluno.nome + "<br>" +
                              "<strong>Nota 1:</strong> " + aluno.nota1 + "<br>" +
                              "<strong>Nota 2:</strong> " + aluno.nota2 + "<br>" +
                              "<strong>Média:</strong> " + aluno.media.toFixed(2);
        listaAlunos.appendChild(alunoHTML);
    });
}

function limparCampos() {
    document.getElementById("nomeAluno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}

