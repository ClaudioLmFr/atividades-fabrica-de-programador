function handleCalc() {
    let n1String = document.getElementById('n1').value
    let n2String = document.getElementById('n2').value
    let n3String = document.getElementById('n3').value

    let n1Convertido = parseFloat(n1String)
    let n2Convertido = parseFloat(n2String)
    let n3Convertido = parseFloat(n3String)

    let resultado1 = n1Convertido * 600
    let resultado2 = n2Convertido * 600
    let resultado3 = n3Convertido * 600

    let resultado = (resultado1 + resultado2 + resultado3)
    alert(`BTU's de potência: ${resultado}`)
}