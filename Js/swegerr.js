const RPROF = "http://localhost:3000/professores/consultar/";
const RALUN = "http://localhost:3000/alunos/consultar/";
const TBODY = document.getElementById("tbody");
const FORM = document.getElementById("form");

async function CarregarFormProf() {
    event.preventDefault()
    let url = "http://localhost:3000/professores/inserir";
    let id = document.getElementById("id").value;
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    console.log(nome)
    console.log(email)

    body = {
        "id_aluno": id,
        "name": nome,
        "data_nascimento": data,
        "email": email,
        "senha": senha
    }

    await inserir(url, body);
}

async function inserir(url, body) {
    console.log("Body=", body);
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function () {
        console.log(this.responseText);
        console.log(request.status);
    }
    if (request.readyState === 4) {
        if (request.status === 200) {
            request.send(JSON.stringify(body))
        }
    }

    return request.responseText
}

FORM.addEventListener("submit", CarregarFormProf);