
import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["la Différence", "le Succès","l'Impact"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Découvrez Nos Projets
        Qui Ont Marqué
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
