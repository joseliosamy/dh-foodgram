async function exibirPosts() {
    const response = await fetch("https://foodgram-back.herokuapp.com/posts");
    const arrayDeFotos = await response.json();

    var sessaoFotos = document.querySelector("#feed");


    for(i = 0; i < arrayDeFotos.length; i++){

        var post = `
        <div class="posts">
            <div class="info">
                <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}
                " alt="">
                <h3>${arrayDeFotos[i].user}</h3>      
            </div>
                <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}
                " alt="post">
            </div>  
        `

        sessaoFotos.insertAdjacentHTML("afterbegin", post)
    }

  }
  exibirPosts();
