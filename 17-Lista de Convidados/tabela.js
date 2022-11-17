let convidados = []

function inserir() {
    let nomeConvidado = document.getElementById("nomeConvidado").value 

    if (nomeConvidado == "") {
        alert("Preencha o nome do convidado!")
    } else {
        convidados.push(nomeConvidado)
        limpar ()
        imprimir()
    }
}
function buscar() {
    let nomeBusca = document.getElementById("nomeBusca").value
    if (nomeBusca == "") {
        alert("Preencha o nome a ser buscado!")
    } else {
        let i = 0
        let achou = false
        while(i < convidados.length && !achou) {
            if(convidados[i] == nomeBusca) {
            alert(`O nome ${nomeBusca} está na posição ${i + 1}`)
            achou = true
            }
            i++
        }
        if(!achou){                             //
            alert("Nome não encontrado!")       // se este IF fosse escrito como um else no IF acima funcionaria da mesma forma
        }                                       //
    }
}
function imprimir() {
    let tabela = document.getElementById("tabela")             //pega a primeira versão da tabela
        let cacheTabela = ""                                   // varíavel onde informações da tabela junto ao HTML serão inseridas
        tabela.innerHTML = ""                                  //a tabela é zerada para receber novas informações
    for (let i = 0; i < convidados.length; i++){
        cacheTabela = cacheTabela + `<tr><td>${convidados[i]}</td> <td> <img src="close.png" onclick="remover(${i})" /> </td> </tr>`
    }
    tabela.innerHTML = cacheTabela
}
function remover(posicao) {
    if (confirm("Tem certeza que deseja remover este convidado?")) {
        convidados.splice(posicao, 1)
        imprimir()
    }
}
function limpar () {
    document.getElementById("nomeConvidado").value = ""
} 