import { useState } from "react"


export default function Usuario(){
    
  const [nome,setNome] = useState("Catana");
  const [imagem, setImagem] = useState("assets/img/catanacomics.svg")
    
  function mudaNome(){
   let resposta = prompt('Qual o nome do usuário?') 
   setNome(resposta) 
      
    }
  function mudaImagem(){
    let resposta = prompt("Qual o link da imagem?")
    setImagem(resposta);
  }
  
    return (
        <div class="usuario" data-test="user">
          <img onClick={mudaImagem}src={!imagem ? "assets/img/catanacomics.svg" : imagem} data-test="profile-image" />
          <div class="texto">
            <strong>catanacomics</strong>
            <span >
              <span data-test="name" className="nome" >{nome}</span>
              
              <ion-icon data-test="edit-name" onClick={mudaNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}