let receita = [0,0,0];

function adicionarR(){
    let novaReceita = document.getElementById("novaReceita").value
    novaReceita = parseFloat(novaReceita)

    receita[0] = receita[0] + novaReceita
    exibirPrecos();
    limpaCampo();
}

function adicionarD(){
    let novaDespesa = document.getElementById("novaDespesa").value
    nDespesa = parseFloat(novaDespesa)

    receita[1] = receita[1] + nDespesa
    exibirPrecos();
    limpaCampo();
}
function exibirPrecos(){
    document.getElementById("totalReceita").innerText = receita[0];
    document.getElementById("totalReceita").style.color = "green"
    document.getElementById("totalDespesa").innerText = receita[1];
    document.getElementById("totalDespesa").style.color = "red"
    balanco ()
}
function limpaCampo(){
    document.getElementById("novaReceita").value = "";
    document.getElementById("novaDespesa").value = "";
}
function balanco () {
    document.getElementById("balanco").innerText = receita[0] - receita[1];
    if (receita[0] - receita[1] <= 0) {
        document.getElementById("balanco").style.color = "red"
    } else {
        document.getElementById("balanco").style.color = "green"
    }
}
