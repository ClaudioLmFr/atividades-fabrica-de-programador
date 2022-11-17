
function substituir() {
    let frase = document.getElementById("frase").value
    let busca = document.getElementById("busca").value
    let troca = document.getElementById("troca").value

    let resultado = frase.includes(busca)

    if(frase != "" && busca != "" && troca != "") {
        if(resultado == true) {
            let novaFrase = frase.replaceAll(busca , troca)
            document.getElementById("frase").value = novaFrase
        }
        else {
            alert("Palavra de busca não existe")
        }
    }
    else{
        alert("Prencha todos os campos")      
    }
}