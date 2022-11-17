function maior() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let numero3 = document.getElementById("numero3").value

    if (numero1 == "" && numero2 == "" && numero3 == "") {
        alert("Todos os valores devem ser preenchidos")
    } else if (numero1 == "") {
        alert("Preencha o primeiro valor")
    } else if (numero2 == "") {
        alert("Preencha o segundo valor")
    } else if (numero3 == "") {
        alert("Preencha o terceiro valor")
    } else if (numero1 == numero2 && numero1 == numero3 && numero2 == numero3) {
        alert("Todos os números são iguais!")
    } else if (numero1 > numero2 && numero1 > numero3) {
        alert("Número " + numero1 + " é maior.")
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert("Número " + numero2 + " é maior.")
    }else {
       alert("Número " + numero3 + " é maior.")
    }
    limparCampos()

}

function limparCampos() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("numero3").value = ""
}




