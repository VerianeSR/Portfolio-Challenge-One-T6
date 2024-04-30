: const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")


nome.addEventListener("click", destacarNomeInput)
email.addEventListener("click", destacarEmailInput)
assunto.addEventListener("click", destacarAssuntoInput)
mensagem.addEventListener("click", destacarMensagemInput)

function destacarNomeInput() {
   nome.style.borderBottom = "2px solid #2e8bc9"
   email.style.borderBottom = "none"
   assunto.style.borderBottom = "none"
   mensagem.style.borderBottom = "none"
}

function destacarEmailInput() {
   
    email.style.borderBottom = "2px solid #2e8bc9"
    nome.style.borderBottom = "none"
    assunto.style.borderBottom = "none"
    mensagem.style.borderBottom = "none"
   
}

function destacarAssuntoInput() {
    assunto.style.borderBottom = "2px solid #2e8bc9"
    email.style.borderBottom = "none"
    nome.style.borderBottom = "none"
    mensagem.style.borderBottom = "none"
}
function destacarMensagemInput() {
    mensagem.style.borderBottom = "2px solid #2e8bc9"
    email.style.borderBottom = "none"
    nome.style.borderBottom = "none"
    assunto.style.borderBottom = "none"
}