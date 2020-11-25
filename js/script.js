

var nome = document.getElementById("nome")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )


function validaFormulario(){
  if(nome.value != "" &&
   email.value != "" && 
   telefone.value != ""){

    
    alert( "Prontinho! Você receberá as novidades por email.")
    
  }else{
    alert("Por favor, preencha os campos nome, email e telefone.")
  }
}

var nome = prompt("Qual seu nome?")
alert(nome + ", Bem vinda!")