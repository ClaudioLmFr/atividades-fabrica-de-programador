let ordenador = []
let soma = 0
function adicionar() {

    let number = document.getElementById("number").value 
    let cnumber = parseFloat(number)

    if (cnumber == "") {
        alert("Campo 'Nova nota' não preenchido!")
    } else {
        (ordenador.indexOf(cnumber) < 0) 
        ordenador.push(cnumber)
        soma += cnumber
        imprimirN()
    } 
    ordenarValores()
    limpar()
}
function ordenarValores() {
    
    for(let i=0; i < ordenador.length -1; i++){ //For ate o penultimo item dalista
       for(let j = i + 1; j < ordenador.length; j++){ //for do proximo item ate o ultimo da lista

        if(ordenador[i] > ordenador[j]){ //se posicao da lista[i] > proxima posicao

            let aux = ordenador[i]; //aux recebe lista pos[i] ,valor maior
            ordenador[i] = ordenador[j]; //lista pos[i] recebe, posicao menor
            ordenador[j] = aux; //proximo item da lista, recebe maior
        }
       }
    }
    document.getElementById("ordemNumero").innerText = ordenador.join(" | ")
}



function imprimirN() {
    document.getElementById("novoNumero").innerText = ordenador.join(" | ")
}

function limpar() {
    document.getElementById("number").value = ""
}