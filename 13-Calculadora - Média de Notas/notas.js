let notas = []
let soma = 0
let menor = 0

function adicionar() {

    let novaNota = document.getElementById("novaNota").value 
    let cnovaNova = parseFloat(novaNota)

    if (cnovaNova == "") {
        alert("Campo 'Nova nota' não preenchido!")
    } else {
        (notas.indexOf(cnovaNova) < 0) 
        notas.push(cnovaNova)
        soma += cnovaNova
        imprimir()
        max()
        min()
        avg()
        limpar()
    } 
}

function max() {
    let max = Math.max(...notas)
    document.getElementById("maiorNota").innerText = max
}


function min() {
    menor = Math.min(...notas)
    document.getElementById("menorNota").innerText = menor
}



function avg() {
    let avg = soma / notas.length
    document.getElementById("mediaNota").innerText = avg

    if (avg < 4) {
        document.getElementById("situacao").innerHTML = "REPROVADO"
        document.getElementById("situacao").style.color = "red"
    } else if (avg >= 4 && avg < 7) {
        document.getElementById("situacao").innerHTML = "RECUPERAÇÃO"
        document.getElementById("situacao").style.color = "blue"
    } else {
        document.getElementById("situacao").innerHTML = "APROVADO"
        document.getElementById("situacao").style.color = "green"
    }
}


function imprimir() {
    document.getElementById("notaAdicionada").innerText = notas.join(" | ")
}

function limpar() {
    document.getElementById("novaNota").value = ""
}


