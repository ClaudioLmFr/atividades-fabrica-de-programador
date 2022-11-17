function handleCalc() {
    let numero1 = document.getElementById('n1').value
    let numero2 = document.getElementById('n2').value

    let resultado = (numero1 * 100) / numero2


    if (numero1 == "" && numero2 == "") {
        alert("Ambos os campos devem ser preenchidos!")
    }else if (numero1 == "") {
        alert("Preencha o primeiro campo")
    }
    else if (numero2 == "") {
            alert("Preencha o segundo campo")
    }
    else if (numero2 == "0") {
        alert("Não dividirás por zero")
    } else {
        alert(`${numero1} é ${resultado}% de ${numero2}`)
    }
}



    //alert(numero1 + ' é ' + resultado + '%' + ' de ' + numero2)
    //1 - Se o usuário não digitar numero1 ou numero2
    //1.1 - Exibir um alerta pedindo que o usuário digite o(s) números que faltaram

    //2 - 11º Mandamento: Não dividirás por zero!!!!!
    //2.2 - Ou seja, o número2 não pode ser zero.