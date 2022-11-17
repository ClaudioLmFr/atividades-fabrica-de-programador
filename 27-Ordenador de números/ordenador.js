let number1 = 0
let number2 = 0
let number3 = 0
let arrNumbers = []

const ascendingOrder = () => {
    number1 = document.getElementById('n1').value
    number2 = document.getElementById('n2').value
    number3 = document.getElementById('n3').value
    arrNumbers.push(number1, number2, number3)
    const arrOrdened = arrNumbers.sort((a, b) => (a - b))
    document.getElementById('results').innerHTML += `A ordem crescente é: ${arrOrdened.join(', ')}<br /> `
    clean()
}
const descendingOrder = () => {
    number1 = document.getElementById('n1').value
    number2 = document.getElementById('n2').value
    number3 = document.getElementById('n3').value
    arrNumbers.push(number1, number2, number3)
    const arrOrdened = arrNumbers.sort((a, b) => (b - a))
    document.getElementById('results').innerHTML += `A ordem decrescente é: ${arrOrdened.join(', ')}<br /> `
    clean()
}
const clean = () => {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('n3').value = ''
    arrNumbers = []
}