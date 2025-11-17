import { useState } from "react";
import flashcards from "./data/flashcards";
import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [index, setIndex] = useState(0);
  const total = flashcards.length;

  const nextCard = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">📚 Flash Cards</h1>
      <ProgressBar currentIndex={index} total={total} />
      <FlashCard card={flashcards[index]} />
      <div className="mt-6 flex gap-4">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
          onClick={prevCard}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          onClick={nextCard}
          disabled={index === total - 1}
        >
          Next
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Card {index + 1} of {total}
      </p>
    </div>
  );
}
