import { Button } from "../components/Button.tsx";

export default function Start() {
  const startAnimations = () => {
    window.location.href = "/frase";
  };

  return (
    <div class="flex flex-col items-center justify-center h-full">
      <Button onClick={startAnimations}>Start</Button>
    </div>
  );
}