import { useState, useEffect } from "react";

// Guessing Game Component
const GuessingGame = ({ onClose }) => {
  const [targetNumber, setTargetNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    setAttempts(attempts + 1);

    if (guess === targetNumber) {
      setMessage(`Correct! It took you ${attempts + 1} attempts.`);
    } else if (guess < targetNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }

    setUserGuess("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Guessing Game</h3>
        <p className="mb-4 text-gray-700">{message}</p>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter your guess"
        />
        <div className="flex justify-between">
          <button
            onClick={handleGuess}
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-transform duration-300"
          >
            Guess
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuessingGame;
