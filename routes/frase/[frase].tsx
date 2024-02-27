import { Handlers, PageProps, FreshContext } from "$fresh/server.ts";
import { context } from "https://deno.land/x/esbuild@v0.19.11/mod.js";
import Axios from "npm:axios";
import Egg from "../../islands/Egg.tsx";

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext<unknown, string>) {
        const { frase } = ctx.params;

        const response = await Axios.get<string>(`https://filmquotes.deno.dev/${frase}`);
        
        if(response.status !== 200) {
            return new Response("", {
                status: 404,
                headers: { Location: "/_404" },
              });
        }

        return ctx.render(response.data);
    }
}

const getWordArtClass = (index: number) => {
    const classes = ['rainbow', 'blues', 'superhero', 'tilt', 'horizon', 'slate', 'purple']; 
    const selectedClass = classes[index % classes.length];
    return `wordart ${selectedClass}`;
};


const Page = (props: PageProps<string>) => {
const frase = props.data;
    const fraseArray = frase.split(" ");
    try{
        return(
            <div>
                <div class = "imagen_voltereta">
                    <img src="/images/gato_meme.png" alt="Gato Meme"/>
                </div>
                <div class = "wordart_container">
                    {fraseArray.map((palabra, index) => (
                        <div class = {getWordArtClass(index)}>
                        <h4 class = "text">{palabra}&nbsp;</h4>
                        </div>
                    ))}
                </div>
                <div>
                    <img class = "aguila_izq" src = "/images/aguila_izq.png" alt = "Aguila voladora izquierda"></img>
                    <img class = "aguila_der" src = "/images/aguila_der.png" alt = "Aguila voladora derecha"></img>
                </div>
                <div>
                    <img class = "gif_explosion" src = "/gifs/cat_explosion.gif" alt = "Gato explosion"></img>
                </div>  
                    <img class = "gato_bailando" src = "/gifs/cat_dancing.gif" alt = "Gato bailando"></img>
                    <audio autoPlay>
                        <source src="/audios/cancion_mix.mp3" type="audio/mp3" />
                            Tu navegador no soporta la reproducción de audio.
                    </audio>
                <div>
                    <img class = "fondo" src = "/images/fondo.jpg" alt = "Fondo de pantalla"/>
                </div>
                <div class = "anuncio_spam_derecha"/>
                <div class = "anuncio_spam_abajo video">
                    <video autoplay loop muted>
                        <source src="/videos/khaled.mp4" type="video/mp4"/>
                        Tu navegador no soporta la reproducción de video.
                    </video>
                    <video autoplay loop muted>
                        <source src="/videos/dave_grohl.mp4" type="video/mp4"/>
                        Tu navegador no soporta la reproducción de video.
                    </video>
                    <video autoplay loop muted>
                        <source src="/videos/saltamontes.mp4" type="video/mp4"/>
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
                <div>
                    <img class="ufo" src="/gifs/ufo.gif" alt="Ovni"/>
                </div>
                <Egg/>
            </div>
        )
    }catch{
        return new Response("", {
            status: 404,
            headers: { Location: "/_404" },
          });
    }
}

export default Page;