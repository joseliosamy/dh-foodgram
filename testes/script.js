
var tagH1 = document.querySelector('h1');

var btnAdd = document.querySelector('#addTarefa') // variavel pra guardar o comando que seleciona o id #addTarefa

function adicionarTarefa(){
    var inputTarefa = document.querySelector("input") // variavel pra guardar o comando que seleciona a tag input
    var ul = document.querySelector("ul");
    
    ul.insertAdjacentHTML("beforeend", `<li>${inputTarefa.value}</li>`); // seleciona e coloca o conteudo do inputTarefa na li

    // alert(inputTarefa.value) // pega o valor do input
}
btnAdd.addEventListener('click', adicionarTarefa) // a partir do click a funcao adicionarTarefa será executada






function adicionar(){
    tagH1.style.color = "red" //mudar a cor do style
    tagH1.textContent = "Olá" //mudar o texto de um elemento html
    tagH1.setAttribute('id', 'texto') // adicionar um atributo a tag, o primeiro é o tipo de atributo que quer adicionar e o segundo é o nome do atributo
}
