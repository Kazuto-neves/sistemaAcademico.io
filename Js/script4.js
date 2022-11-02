const RDIS = "http://localhost:3000/disciplina/get-disciplina";
const TBODY = document.getElementById("tbody");



async function listar() {
    const DATA = await fetch(RDIS);
    const JSON = await DATA.json();
    
    JSON.forEach(function (alldisciplina) {
        var row =
            `<tr> 
                <td>${alldisciplina.id_disciplina}</td>
                <td>${alldisciplina.nome}</td>
                <td>${alldisciplina.id_disciplina}</td>
                <td>${alldisciplina.ativo}</td>
            </tr>` 
     TBODY.innerHTML += row;
      console.log(row);

    });
}  

const test = async () => {
    await listar();
};


