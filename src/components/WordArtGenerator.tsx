import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

const RandomWordGenerator = ({
  goToNextStage,
}: {
  goToNextStage: () => void;
}) => {
  const [typedWord, setTypedWord] = useState("");
  const [word, setWord] = useState("");

  const generateWord = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let randomWord = "";

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];
    }

    setWord(randomWord);
  };

  useEffect(() => {
    generateWord();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-[200px]">
        {word && (
          <p className="text-2xl font-bold animate-[spin_1s_linear_infinite] w-[155px] font-jank">
            {word}
          </p>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Type the text above"
          onChange={(e) => setTypedWord(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          onClick={generateWord}
          className="p-2 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          <IoReload />
        </button>
        <button
          onClick={goToNextStage}
          disabled={typedWord.toLowerCase() !== word}
          className="p-2 flex items-center justify-center w-fit h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RandomWordGenerator;
