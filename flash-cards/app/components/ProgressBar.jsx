export default function ProgressBar({ currentIndex, total }) {
    const percent = ((currentIndex + 1) / total) * 100;
  
    return (
      <div className="w-full bg-gray-300 rounded-full h-4 my-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    );
  }
  