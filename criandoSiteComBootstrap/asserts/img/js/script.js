let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let vlNome = document.querySelector('#vlNome')
let vlEmail = document.querySelector('#vlEmail')


let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'
vlNome.style.padding = '0%'
vlEmail.style.padding = '0%'
vlAssunto.style.padding = '0%'

function validacaoNome () {
    let vlNome = document.querySelector('#vlNome')
    if(nome.value.length < 3){
    vlNome.innerHTML = 'Nome invalido'
    vlNome.style.color = 'red'    
    } else {
        vlNome.innerHTML = ' '
        nomeOk = true
    }

}

function validacaoEmail(){
    let vlEmail = document.querySelector('#vlEmail')
    if(email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1){
    vlEmail.innerHTML = 'E-mail invalido'
    vlEmail.style.color = 'red'    
    } else {
        vlEmail.innerHTML = ' '
         emailOk = true
    }
}

function validacaoAssunto(){
    let vlAssunto = document.querySelector('#vlAssunto')
    if(assunto.value.length >= 100){
    vlAssunto.innerHTML = 'Digite no maximo 100 caracteres'   
    vlAssunto.style.color = 'red' 
    vlAssunto.style.display = 'block'
    }else{
    vlAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulario enviado com sucesso !!!")
    }else{
        alert("Preencha o formulario corretamente antes de enviar ...")
    }
}

