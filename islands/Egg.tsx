
//lleva a la pagina de frase
export default function Egg() {
  return (
    <div>
      <button class = "easter_egg" onClick = {() => window.location.href = "/easter_egg"}>Ojo</button>
    </div>
  );
}