let total = 0

function adicionar() {
    let frutaSelecionada = document.getElementById("fruta").value

    switch (frutaSelecionada) {
        case "Banana":
            total+=2
            alert("Banana adicionada: " + total)
            break;
        case "Maçã":
            total+=4
            alert("Maçã adicionada: " + total)
            break; 
        case "Abacate":
            total+=2.5
            alert("Abacate adicionada: " + total)
            break; 
        case "Abacaxi":
            total+=3.5
            alert("Abacaxi adicionada: " + total)
            break;
        default:
            alert("Selecione uma fruta.")
            break;
    }
}

function finalizar() {
    alert("Sua compra foi finalizada com sucesso, total de: " + total + " reais.")
    total=0
}