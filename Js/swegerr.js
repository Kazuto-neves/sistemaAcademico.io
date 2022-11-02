const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const TBODY1 = document.getElementById("tbody");
const TBODY2 = document.getElementById("tbody2");

async function listar(op) {
    if (op === 1) {
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
            TBODY1.innerHTML += row;
        });
    }else{
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
            TBODY2.innerHTML += row;
        });
    }
}

FORM.addEventListener("submit", CarregarFormProf);