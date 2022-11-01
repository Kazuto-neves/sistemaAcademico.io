const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const LOGIN = document.getElementById("login");
const PASS = document.getElementById("password");
const TBODY = document.getElementById("tbody");

async function span(msg) {
    let span = document.getElementById("checkExist");
    span.innerText = msg;
}

const CONSULTAR = async () => {
    let rota = "";
    let tipo = 0;
    if (LOGIN.value.length == 1/*melhor colocar 12*/) {
        rota = (RALUN + LOGIN.value);
        tipo = 2;
    } else if (LOGIN.value.length == 9/*melhor colocar 10*/) {
        rota = (RPROF + LOGIN.value);
        tipo = 1;
    }
    rota.length != 0 ? await clogin(tipo, rota) : span("erro");
}

async function clogin(tipo, rota) {
    const DATA = await fetch(rota);
    const JSON = await DATA.json();
    if (tipo === 1) {
        span("professor");
        if (JSON[0].senha === PASS.value) console.log("logado como professor");
        else console.log("senha invalida");
        return JSON[0].id_professor;
    } else {
        span("aluno");
        if (JSON[0].senha === PASS.value) console.log("logado como aluno");
        else console.log("senha invalida");
        return JSON[0].id_aluno;
    }
}

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
        TBODY.innerHTML = row;

    });
}

const test = async () => {
    console.log("espere");
    let txt = (await CONSULTAR());
    console.log("não doeu");
    console.log(txt);
    await listar();
};

LOGIN.addEventListener("input", test)



