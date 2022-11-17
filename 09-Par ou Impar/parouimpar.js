function verificar() {
    let parImpar = document.getElementById("numero1").value
    
    if (parImpar =="") {
        alert("Digite um número!")
    } else if (parImpar % 2 == 0) {
        alert("O número: " + parImpar + " é PAR")
    } else {
        alert("O número: " + parImpar + " é ÍMPAR")
    }
}