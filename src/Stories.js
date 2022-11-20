import Story from "./Story";


export default function Stories(){

  const ListaStories = [
    {imagem: 'assets/img/meowed.svg', usuario:'meowed'},
    {imagem: 'assets/img/barked.svg',usuario: 'barked'},
    {imagem: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet'},
    {imagem: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics'},
    {imagem: 'assets/img/respondeai.svg', usuario: 'respondeai'},
    {imagem: 'assets/img/filomoderna.svg', usuario: 'filomoderna'}
  ]
    return (
        <div class="stories">
          {ListaStories.map(s => <Story imagem={s.imagem} usuario={s.usuario}/>)}
          

         

          

          

          <div class="story">
            <div class="imagem">
              <img src="assets/img/respondeai.svg" />
            </div>
            <div class="usuario">
              respondeai
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/filomoderna.svg" />
            </div>
            <div class="usuario">
              filomoderna
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/memeriagourmet.svg" />
            </div>
            <div class="usuario">
              memeriagourmet
            </div>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}