function login(){
    var nome = document.querySelector('#inputNome').value; // guarda o valor do #inputNome, 2 opcao nome = nome.value

    if(nome === ""){
       return alert("Digite um nome primeiro");
    }
    sessionStorage.setItem("nomeUsuario", nome);

    window.location.href = "/feed.html"; // manda o usuario pra pagina feed
}

var btnLogin = document.querySelector('#btnLogin'); // seleciona o id do botão

btnLogin.addEventListener('click', login); // fica observando o evento de 'click', após o click ele executa a funçao login

//
/*
function logout(){
    var nome = document.querySelector('#inputNome').value; // guarda o valor do #inputNome, 2 opcao nome = nome.value

    if(nome == ""){
       alert("Você não está conectado");
    }
    sessionStorage.setItem("nomeUsuario", "");

    alert("Desconectado")

    window.location.href = "/login.html"; // manda o usuario pra pagina feed
}
var btnLogout = document.querySelector('#btnLougout'); // seleciona o id do botão

btnLogout.addEventListener('click', logout); // fica observando o evento de 'click', após o click ele executa a funçao login

//
*/