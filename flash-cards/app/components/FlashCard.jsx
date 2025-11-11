import { useState } from "react";

export default function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg w-80 h-60 flex items-center justify-center text-center cursor-pointer transition-transform duration-300"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="text-xl font-semibold p-4">
        {flipped ? card.answer : card.question}
      </div>
    </div>
  );
}
