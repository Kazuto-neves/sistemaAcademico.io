const RPROF = "http://localhost:3000/professor/get-professor";
const RALUN = "http://localhost:3000/aluno/consultar";
const LOGIN = document.getElementById("button");
const TBODY = document.getElementById("tbody");



async function listar() {
    const DATA = await fetch(RALUN);
    const JSON = await DATA.json();
    
    JSON.forEach(function (allalunos) {
        var row =
            `<tr> 
                <td>${allalunos.id_aluno}</td>
                <td>${allalunos.nome}</td>
                <td>${allalunos.data_nascimento}</td>
                <td>${allalunos.email}</td>
                <td>${allalunos.senha}</td>
            </tr>` 
     TBODY.innerHTML += row;
      console.log(row);

    });
}  

const test = async () => {
    await listar();
};

//LOGIN.addEventListener("buttom", test)
