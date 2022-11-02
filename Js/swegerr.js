const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const TBODY = document.getElementById("tbody");

async function listar() {
    const DATA = await fetch(RPROF);
    const JSON = await DATA.json();
    console.log('click');
    // var dados = JSON.parse(RPROF);
    JSON.forEach(function (allalunos) {
        var row =
            `<tr> 
                <td>${allalunos.id_professor}</td>
                <td>${allalunos.nome}</td>
                <td>${allalunos.data_nascimento}</td>
                <td>${allalunos.email}</td>
                <td>${allalunos.senha}</td>
            </tr>`
        TBODY.innerHTML += row;
    });
}

FORM.addEventListener("submit", CarregarFormProf);