function registerPhoto(){
    var duvida = sessionStorage.getItem("nomeUsuario");
    if(duvida == undefined ){
        alert("Você não está Logado, redirecionando para página de login!")
        window.location.href = "/login.html"
        return 
    }
    window.location.href = "/cadastro-de-foto.html"
}
var btnRegisterPhoto = document.querySelector(".btnRegisterPhoto");

btnRegisterPhoto.addEventListener("click", registerPhoto)