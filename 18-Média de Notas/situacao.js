let listaNotas = []
let soma = 0
let menor = 0
let button =document.getElementById('adicionar')
let buttonFinalizar = document.getElementById('finalizar')
function adicionar() {
    console.log(button)
    if (button.innerText == 'Adicionar') {
        let nota = document.getElementById("numero").value
        nota = parseFloat(nota)
        listaNotas.push(nota)
        soma += nota
        document.getElementById("notas").innerText = listaNotas
        limpar()
    } else {
        substituir()
    }
}
function substituir() {
    let nota = document.getElementById("numero").value
    nota = parseFloat(nota)
    let indexMenor = listaNotas.indexOf(menor)
    listaNotas[indexMenor] = nota
    soma += nota
    document.getElementById("notas").innerText = listaNotas
    max()
    min()
    avg()
    limpar()
}
function finalizar() {
    if (button.innerText == 'Adicionar') {
        button.innerText = 'Substituir'
    } else {
        button.innerText = 'Adicionar'
    }

    if (buttonFinalizar.innerText == 'Finalizar') {
        buttonFinalizar.innerText = 'Retornar'
    } else {
        buttonFinalizar.innerText = 'Finalizar'
    }
    max()
    min()
    avg()
}
function max() {
    let max = Math.max(...listaNotas)
    document.getElementById("maiorNota").innerText = max
}
function min() {
    menor = Math.min(...listaNotas)
    document.getElementById("menorNota").innerText = menor
}
function avg() {
    let avg = soma / listaNotas.length
    document.getElementById("media").innerText = avg

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
function limpar() {
    document.getElementById("numero").value = ""
}