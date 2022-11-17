function classificar() {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let number3 = document.getElementById("number3").value

    if (number1 == "" && number2 == "" && number3 == "") {
        alert("Todos os campos devem ser preenchidos")
    } else if (number1 == "") {
        alert("Preencha o primeiro campo")
    } else if (number2 == "") {
        alert("Preencha o segundo campo")
    } else if (number3 == "") {
        alert("Preencha o terceiro campo")
    } else if (number1 == number2 && number2 == number3) {
        alert("Triângulo Equilátero")
    } else if (number1 == number2 && number2 != number3) {
        alert("Triângulo Isóceles")
    } else if (number1 == number3 && number1 != number2) {
        alert("Triângulo Isóceles")
    } else if (number2 == number3 && number3 != number1) {
        alert("Triângulo Isóceles")
    } else {
        alert("Triângulo Escaleno")
    }
}


