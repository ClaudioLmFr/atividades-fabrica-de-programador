function salvar() {
    let nome = document.formulario.nome.value
    let email = document.formulario.email.value
    let idade = document.formulario.idade.value
    let tipo = document.formulario.tipo.value

    let erros = ""
   
    if(nome =="") {
        erros += "nome,"
    }

    if(email =="") {
        erros += "email,"
    }

    if(idade =="") {
        erros += "idade,"
    }

    if(tipo =="") {
        erros += "tipo,"
    }

    if(erros != "") {
        alert("Os campos: " + erros + "não foram preenchidos corretamente.")
    } else {
        alert("Tudo certo!")
    }
}




//if (nome != "") {
//    if (email !="") {
//       if (idade !="") {
//            if (tipo !="") {
//                alert("Tudo certo!")
//            } else {
//                alert("O campo tipo é obrigatório")
//            }
//        } else {
//            alert("O campo idade é obrigatório")
//        }
//    } else {
//        alert("Ocampo email é obrigatório")
//    }
//} else {
//    alert("O campo nome é obrigatório")
//}





//function salvar () {
  //let nome = document.getElementById("nome").value
  //let email = document.getElementById("email").value
  //let idade = document.getElementById("idade").value
  //let tipo = document.querySelector("input[type=radio]:checked").value

  //console.log(nome, email, idade,tipo)
//}