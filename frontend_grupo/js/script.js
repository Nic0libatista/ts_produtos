function carregar(){
    const container = document.querySelector(".container");
    fetch("http://127.0.0.1:3000/api/produto")
    .then((res) =>res.json())
    .then((dados)=>{
        let saida = "";
        console.log(dados)
        dados.map((rs)=>{
            saida+=` 
            <div class="card col-3" >
  <img src="img/new_produto.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${rs.nomeProduto}</h5>
    <p class="card-text">${rs.fabricante}</p>
    <p class="card-text">${rs.descricao}</p>
    <p class="card-text">${rs.preco}</p>
    <a href="#" class="btn btn-primary" id="atualizar">Atualizar</a>
    <a href="#" class="btn btn-danger" id="deletar">Deletar</a>


  </div>
</div>
`;
        });
        container.innerHTML = saida;
    })
}
document.body.onload = ()=>{carregar()}


// fazer a referência ao botão cadastrar
// pagina index.html
const btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.onclick = ()=>{
  if(confirm("Você deseja cadastrar este produto?")==1){
    fetch("http://127.0.0.1:3000/api/create", {
      method:"POST",
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body:JSON.stringify({
        nomeProduto:document.querySelector("#txtNome").value,
        fabricante:document.querySelector("#txtFabricante").value,
        descricao:document.querySelector("#txtDescricao").value,
        preco:document.querySelector("#txtPreco").value

      })
    })
    .then((res)=>res.json())
    .then((dados)=>{
      alert(dados);
      document.location.reload();
      

    })
    .catch((erro)=>{
      console.error(erro)
    })
  }
}
