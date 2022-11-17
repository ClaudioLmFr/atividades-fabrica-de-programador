let listaCompras = []

function adicionarItem() {
    let item = document.getElementById("item").value
    //   PEGAR O ITEM NO INPUT

    if (item == "") {
        alert("Campo item não preenchido!")
        // cAMPO ITEM NÃO PREENCHIDO
    } else {

        if (listaCompras.indexOf(item) < 0) {
            // VERIFICA SE O ELEMENTO JÁ EXISTE NO ARRAY
            listaCompras.push(item)
            // ADICIONAR O ITEM NO FINAL DA LISTA
            imprimir()
            // IMPRIME A LISTA DE NOVO
        } else {
            alert("Item já adicionado!") 
            
        }
        limpar()
    }
}
function removerItem() {
    let itemRemover = document.getElementById("itemRemover").value
              
    let indiceRemover = listaCompras.indexOf(itemRemover)
    
    if (indiceRemover < 0) {
        alert("Item não encontrado!")
    } else {
        listaCompras.splice(indiceRemover, 1)
        alert("Item removido com sucesso!")
        imprimir()
 
    }
    limpar()
}

function limpar() {
    document.getElementById("item").value = ""
    document.getElementById("itemRemover").value = ""

}
function imprimir() {
    document.getElementById("lista").innerText = listaCompras.join(" | ")
}
