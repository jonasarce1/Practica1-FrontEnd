import { PageProps } from "$fresh/server.ts";

//ocupa toda la pantalla
const Page = () => {
    return(
        <div style={{ margin: 0, padding: 0, width: "100vw", height: "100vh" }}>
        <video autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/videos/yoko_ono.mp4" type="video/mp4" />
        </video>
      </div>
    )
}

export default Page;