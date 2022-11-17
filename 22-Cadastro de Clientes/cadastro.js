import { removePontos, removeHifens } from "./formatador.js"

let clientes = []

function cadastrar() {
    let novoCliente = {}
    novoCliente.nome = document.getElementById("nome").value 
    novoCliente.cpf = document.getElementById("cpf").value 
    novoCliente.cep = document.getElementById("cep").value 
    novoCliente.numeroResidencial = document.getElementById("numero").value 
    novoCliente.limite = document.getElementById("limite").value 

    novoCliente.cpf = removePontos(novoCliente.cpf)
    novoCliente.cep = removeHifens(novoCliente.cep)

    clientes.push(novoCliente)
    listarCliente()
    alert("Cliente cadastrado com sucesso")
}

function listarCliente() {
    let tabelaCliente = document.getElementById("tabelaCliente")
    tabelaCliente.innerHTML = ""
    for(let i=0; i < clientes.length; i++)
    tabelaCliente.innerHTML += `
    <tr>
        <td>${clientes[i].nome}</td>
        <td>${clientes[i].cpf}</td>
        <td>${clientes[i].cep}</td>
        <td>${clientes[i].limite}</td>
    </tr>
    `
}

document.getElementById("btnCadastrar").onclick = cadastrar  //função cadastrar add no próprio html