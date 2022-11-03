const RDIS = "http://localhost:3000/disciplinas/consultar";
const TBODY = document.getElementById("tbody");



async function listar() {
    const DATA = await fetch(RDIS);
    const JSON = await DATA.json();
    
    JSON.forEach(function (alldisciplina) {
        var row =
            `<tr> 
                <td>${alldisciplina.id_disciplina}</td>
                <td>${alldisciplina.nome}</td>
                <td>${alldisciplina.id_professor}</td>
                <td>${alldisciplina.ativo===0?"Desativado":"Ativado"}</td>
            </tr>` 
     TBODY.innerHTML += row;
      console.log(row);

    });
}  

const test = async () => {
    await listar();
};


