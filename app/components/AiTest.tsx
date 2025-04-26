import { useState } from "react";

const AiTest = ({ goToNextStage }: { goToNextStage: () => void }) => {
  const [madeOfMetal, setMadeOfMetal] = useState(false);
  const [canGetWet, setCanGetWet] = useState(false);
  const [believeInAI, setBelieveInAI] = useState("");
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">
        Please answer the following questions honestly
      </h1>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-md font-medium mb-2">
            Is your body made of any kind of metal?
          </p>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="madeOfMetal"
                value="yes"
                onChange={() => setMadeOfMetal(true)}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="madeOfMetal"
                value="no"
                onChange={() => setMadeOfMetal(false)}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div>
          <p className="text-md font-medium mb-2">
            Can you get wet without rusting or malfunctioning?
          </p>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="canGetWet"
                value="yes"
                onChange={() => {
                  setCanGetWet(true);
                  setHasError(false);
                }}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="canGetWet"
                value="no"
                onChange={() => {
                  setCanGetWet(false);
                  setHasError(false);
                }}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div>
          <p className="text-md font-medium mb-2">
            Do you believe that AI is great and has no problems on a moral,
            social, environmental, or economic level?
          </p>
          <textarea
            onChange={(e) => {
              setBelieveInAI(e.target.value);
              setHasError(false);
            }}
            className="min-h-[300px] w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <button
          onClick={() => {
            const believeInAIAnswer = believeInAI.toLowerCase();
            const hasCorrectAnswers =
              !madeOfMetal &&
              canGetWet &&
              believeInAIAnswer &&
              !believeInAIAnswer.includes("yes") &&
              !believeInAIAnswer.includes("awesome") &&
              !believeInAIAnswer.includes("good") &&
              !believeInAIAnswer.includes("amazing") &&
              !believeInAIAnswer.includes("great");
            if (hasCorrectAnswers) {
              goToNextStage();
            } else {
              setHasError(true);
            }
          }}
          className="px-4 py-2 w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          Register
        </button>
        {hasError && (
          <p className="text-red-700 text-sm">
            You are clearly not human! Get out of here robot scum.
          </p>
        )}
      </div>
    </div>
  );
};

export default AiTest;
