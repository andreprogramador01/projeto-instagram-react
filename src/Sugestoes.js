import Sugestao from "./Sugestao";

export default function Sugestoes(){
    const arraySugestao =[
      {imagem: 'assets/img/bad.vibes.memes.svg', nome:'bad.vibes.memes'},
      {imagem: 'assets/img/chibirdart.svg', nome:'chibirdart'}
    ]
    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {arraySugestao.map(s =><Sugestao imagem={s.imagem} nome={s.nome}/>)}

          

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/razoesparaacreditar.svg" />
              <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                <div class="nome">adorable_animals</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/smallcutecats.svg" />
              <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>
    )
}