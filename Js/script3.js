const RPROF = "http://localhost:3000/professores/consultar";
const RALUN = "http://localhost:3000/alunos/consultar";
const LOGIN = document.getElementById("button");
const TBODY = document.getElementById("tbody");



async function listar() {
    const DATA = await fetch(RPROF);
    const JSON = await DATA.json();
    
    JSON.forEach(function (allprofessor) {
        var row =
            `<tr> 
                <td>${allprofessor.id_professor}</td>
                <td>${allprofessor.nome}</td>
                <td>${allprofessor.data_nascimento}</td>
                <td>${allprofessor.email}</td>
                <td>${allprofessor.senha}</td>
            </tr>` 
     TBODY.innerHTML += row;
      console.log(row);

    });
}  

const test = async () => {
    await listar();
};


