const RBOL = "http://localhost:3000/boletins/consultar";
const TBODY = document.getElementById("tbody");



async function listar() {
    const DATA = await fetch(RBOL);
    const JSON = await DATA.json();
    
    JSON.forEach(function (alldisciplina) {
        var row =
            `<tr> 
                <td>${alldisciplina.id_boletim}</td>
                <td>${alldisciplina.id_aluno}</td>
                <td>${alldisciplina.id_disciplina}</td>
                <td>${alldisciplina.nota_1}</td>
                <td>${alldisciplina.nota_2}</td>
                 <td>${alldisciplina.nota_3}</td>
            </tr>` 
     TBODY.innerHTML += row;
      console.log(row);

    });
}  

const test = async () => {
    await listar();
};


