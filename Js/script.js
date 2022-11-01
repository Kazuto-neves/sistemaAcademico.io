const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const LOGIN = document.getElementById("login");
const PASS = document.getElementById("password");
const TBODY = document.getElementById("tbody");

/*
    aluno ou professor
*/

async function span(msg){
    let span = document.getElementById("checkExist");
    span.innerText=msg;
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
        if (JSON[0].senha === PASS.value) {
            console.log("logado como professor");
        } else {
            console.log("senha invalida");
        }
        return JSON[0].id_professor;
    }else{
        span("aluno");
        if (JSON[0].senha === PASS.value) {
            console.log("logado como aluno");
        } else {
            console.log("senha invalida");
        }
        return JSON[0].id_aluno;
    }
}

async function listar() {
    const DATA = await fetch(RPROF);
    const JSON = await DATA.json();
    console.log('click');
    event.preventDefault();
    for (let i = 0; i < JSON.length; i++) {
        const TR = document.createElement('tr');
        TR.classList.add('row');
        const IDD = document.createElement('td');
        IDD.innerText = JSON[0].id_professor;
        const NOMED = document.createElement('td');
        NOMED.innerText = JSON[i].nome;
        const DATAD = document.createElement('td');
        DATAD.innerText = JSON[i].data_nascimento;
        const EMAILD = document.createElement('td');
        EMAILD.innerText = JSON[i].email;
        const SENHAD = document.createElement('td');
        SENHAD.innerText = JSON[i].senha;

        TR.appendChild(IDD);
        TR.appendChild(NOMED);
        TR.appendChild(DATAD);
        TR.appendChild(EMAILD);
        TR.appendChild(SENHAD);

        TBODY.appendChild(TR);
    };

}

const test = async () => {
    console.log("espere");
    let txt = (await CONSULTAR());
    console.log("não doeu");
    console.log(txt);
    await listar();
};

LOGIN.addEventListener("input", test)



