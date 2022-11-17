let arrTarefas = []
let arrTarefasBkp = []
let clearFilter = true;
let buscarActive = false;

const adicionar = () => {
    var tarefa = document.getElementById('tarefa').value

    if(tarefa == "") {
        alert("Digite um texto ou valor válido!")
    } else {
        arrTarefas.push(tarefa)
        limpar()
        imprimir()
    }
}

const limpar = () => {
    document.getElementById("tarefa").value = ""
}

const imprimir = () => {
    var tarefasAdd = document.getElementById("tarefasAdd")             
    var cacheTarefas = ""                                  
    tarefasAdd.innerHTML = ""                                 
for (let i = 0; i < arrTarefas.length; i++){
    cacheTarefas = cacheTarefas + `<div class="inserido">${arrTarefas[i]}</div>`
}
tarefasAdd.innerHTML = cacheTarefas
}

const buscar = () => {
   
  arrTarefasBkp = arrTarefas
  var tarefa = document.getElementById('tarefa').value

  arrTarefasBkp = arrTarefas

  if(tarefa == "") {
    alert("Digite um texto ou valor para a busca!")
  } 
    if(clearFilter){
        arrTarefasBkp = arrTarefas;
        arrTarefas = arrTarefas.filter((element) => {
            return element.toLowerCase().includes(tarefa.toLowerCase());
        });
        document.getElementById("tarefasAdd").innerHTML = "";
        imprimir();
        clearFilter = false;
        limpar()
    }
}
const limparFiltro = () => {
    buscarActive = false;
    clearFilter = true;
    arrTarefas = arrTarefasBkp;
    document.getElementById("tarefasAdd").innerHTML = "";
    imprimir();
    limpar();
}






