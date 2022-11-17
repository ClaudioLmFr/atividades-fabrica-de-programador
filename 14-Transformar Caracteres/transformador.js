function grande() {
    let texto = document.getElementById("texto").value
        if (texto == ""){
            alert("Um texto deve ser digitado!")
        } else {
            document.getElementById("texto").value = texto.toUpperCase()
        }
}
function pequeno() {
    let texto = document.getElementById("texto").value
        if (texto == ""){
            alert("Um texto deve ser digitado!")
        } else {
            document.getElementById("texto").value = texto.toLowerCase()
        }
}
function quanto() {
    let texto = document.getElementById("texto").value
        if (texto == ""){
            alert("Um texto deve ser digitado!")
        } else {
            texto.length
            alert("A quantidade de caracteres digitados é: " + texto.length)
        }
}