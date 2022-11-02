const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const LOGIN = document.getElementById("login");
const PASS = document.getElementById("password");
const TBODY = document.getElementById("tbody");

//var Sn = "";

async function span(msg) {
    let span = document.getElementById("checkExist");
    span.innerText = msg;
}

async function CONSULTAR(op){
    let rota = "";
    let tipo = 0;
    if (LOGIN.value.length == 1/*melhor colocar 12*/) {
        rota = (RALUN + LOGIN.value);
        tipo = 2;
    } else if (LOGIN.value.length == 9/*melhor colocar 10*/) {
        rota = (RPROF + LOGIN.value);
        tipo = 1;
    }
    if(op===1){
    	rota.length != 0 ? await spanT(tipo) : span("erro");
    }else if(op===2){
    	rota.length != 0 ? await clogin(tipo,rota) : span("erro");
    }
}

async function spanT(tipo) {
    if (tipo === 1) {
        span("professor");
    } else {
        span("aluno");
    }
}

async function clogin(tipo,rota) {
    const DATA = await fetch(rota);
    const JSON = await DATA.json();
    if (tipo === 1) {
        if (JSON[0].senha === PASS.value) window.location.href = "../sistemaAcademico.io/html/professor.html";
        else console.log("senha invalida");
    } else {
        if (JSON[0].senha === PASS.value) window.location.href = "../sistemaAcademico.io/html/aluno.html";
        else console.log("senha invalida");
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
        TBODY.innerHTML += row;
    });
}

const Run = async () => {
    let txt = (await CONSULTAR(1));
    //await listar();
};

LOGIN.addEventListener("input", Run);



