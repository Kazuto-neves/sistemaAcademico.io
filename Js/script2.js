const RPROF = "http://localhost:3000/professor/get-professor";
const RALUN = "http://localhost:3000/aluno/consultar";
const LOGIN = document.getElementById("login");
const PASS = document.getElementById("password");
const TBODY = document.getElementById("tbody");

/*
	aluno ou professor
*/
const CONSULTAR = async () => {
    let tipo = document.getElementById("checkExist");
    tipo.innerText="Buscando...";
    console.log("1");
    let rota = LOGIN.value===""?(RPROF + "0"):(RPROF+"/"+LOGIN.value);
    console.log("2");
    try {
        const DATA = await fetch(rota);
        const JSON = await DATA.json();
        tipo.innerText="professor";
        console.log("3");
        if(JSON[0].senha===PASS.value){
        	console.log("logado como professor");
        }else{
		console.log("senha invalida");
	}
	console.log("4");
        return JSON[0].id_professor;
    } catch (error) {
        console.log("5");
        rota = LOGIN.value===""?(RALUN + "0"):(RALUN+"/"+LOGIN.value);
        try {
            console.log("6");
            const DATA = await fetch(rota);
            const JSON = await DATA.json();
            console.log("7");
            tipo.innerText="aluno";
            if(JSON[0].senha===PASS.value){
        	console.log("logado como aluno");
            }else{
		console.log("senha invalida");
	    }
	    console.log("9");
            return JSON[0].id_aluno;
        } catch (error) {
            console.log("10");
            console.log(error.message);
        }
    }
};

async function listar() {
	const DATA = await fetch(RPROF);
    const JSON = await DATA.json();
	console.log('click');
    var i;
   // var dados = JSON.parse(RPROF);
    JSON.forEach(function (allalunos){
    document.body.innerHTML+="<p>" +allalunos.id_professor+"</p>"
    document.body.innerHTML+="<p>" +allalunos.nome+"</p>"
   
    });
	/*event.preventDefault();
	for(let i=0;i<JSON.length;i++){
	
	const IDD = document.createElement('td');
	IDD.innerText=JSON[0].id_professor;
	const NOMED = document.createElement('td');
	NOMED.innerText=JSON[i].nome;
	const DATAD = document.createElement('td');
	DATAD.innerText=JSON[i].data_nascimento;
	const EMAILD = document.createElement('td');
	EMAILD.innerText=JSON[i].email;
	const SENHAD = document.createElement('td');
	SENHAD.innerText=JSON[i].senha;
	
	TR.appendChild(IDD);
	TR.appendChild(NOMED);
	TR.appendChild(DATAD);
	TR.appendChild(EMAILD);
	TR.appendChild(SENHAD);
	
	TBODY.appendChild(TR);
	};*/
	
}



const test = async () => {
    console.log("espere");
    let txt = (await CONSULTAR());
    console.log("não doeu");
    console.log(txt);
    await listar();
};

LOGIN.addEventListener("input", test)

