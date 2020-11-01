function logout(){
    var duvida = sessionStorage.getItem("nomeUsuario");
    // informar ao usuario se está logado ou não
    // if, se duvida for indefinido, o usuario vai ser avisado que não está logado e também será redirecionado para página de login
    if(duvida == undefined ){
        alert("Você não está Logado, redirecionando para página de login!")
        window.location.href = "/login.html";
        return
    }
    // else, efetua o logout do usuário
    else{
        alert("Desconectado")
        // enxergar o valor de nomeUsuario no sessionStorage e remove-lo
        sessionStorage.removeItem("nomeUsuario");
        // redirecionar o usuário para página de login
        window.location.href = "/login.html";
    }
}
// exergar o elemento com o id btnLogout
var btnLogout = document.querySelector('#btnLogout');
// adicionar um evento de click e executar a função logout no objeto clicado
btnLogout.addEventListener("click", logout)
