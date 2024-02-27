import Start from "../islands/Start.tsx";

export default function Home() {
  return (
    <div>
      <div class="comic-bubble">
        <p class="comic-text">¡Hola, soy Jonás! Te recomiendo activar el audio y dar permisos de audio y vídeo a tu navegador antes de empezar. (La página puede tardar en cargar por favor ten paciencia)</p>
      </div>
      <div>
      <img class = "yo" src = "/images/yo.jpeg" alt = "Un chico muy guapo"></img>
      </div>
      <Start />
      <div class = "comic-bubble-right">
        <p class = "comic-text">¡Hola, yo soy la zanahoria ligeramente interactiva! Por cierto, hay un pequeño huevo de pascua escondido en alguna parte de la siguiente página.</p>
      </div>
      <div>
        <img class = "zanahoria" src = "/images/zanahoria.png" alt = "Yo pero no"></img>
      </div>
    </div>
    );
}