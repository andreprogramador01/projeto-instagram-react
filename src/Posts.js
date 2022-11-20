import Post from "./Post"

export default function Posts(){
  const arrayPostagens = [
    {
      imagem: "assets/img/gato-telefone.svg", curtidas: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>", imagemUsuario:"assets/img/meowed.svg"
    },
    {
      imagem: "assets/img/gato-telefone.svg", curtidas: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>", imagemUsuario:"assets/img/meowed.svg"
    }
  ]
    return (

      
        <div class="posts">
          {arrayPostagens.map((p) => <Post imagem={p.imagem} curtidas={p.curtidas} imagemUsuario={p.imagemUsuario} />)}
        </div>
    )
}