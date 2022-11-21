import { useState } from "react"

export default function Post(props){
  const [bookmark, setBookmark] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline")
  const [quantidadeLikes, setquantidadeLikes] = useState(123)

  function mudarBookmark(){
    if(bookmark === "bookmark-outline"){
      setBookmark('bookmark');
    }else{
      setBookmark('bookmark-outline');
    }
    
  }
  function curtir(){
    if(like === "heart-outline"){
      setLike("heart")
      setquantidadeLikes(quantidadeLikes+1);
      
    }else{
      setLike("heart-outline");
      setquantidadeLikes(quantidadeLikes-1);
    }
  }
  function curtirFoto(){
    if(like !== "heart"){
      setquantidadeLikes(quantidadeLikes+1);
    }
    setLike("heart");
  }
    return (
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagemUsuario} />
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.imagem} data-test="post-image" onDoubleClick={curtirFoto} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" class="curtir-icone" name={like} onClick={curtir}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" onClick={mudarBookmark} name={bookmark}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong >outras <span data-test="likes-number"> {quantidadeLikes}</span> pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    )
}