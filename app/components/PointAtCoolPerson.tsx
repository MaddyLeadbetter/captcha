import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import camera from "../assets/camera.png";
import down from "../assets/down.jpg";
import downleft from "../assets/downleft.png";
import forward from "../assets/forward.png";
import left from "../assets/left.png";
import right2 from "../assets/right.jpg";
import right from "../assets/right.png";
import up from "../assets/up.jpg";
import upleft from "../assets/upleft.jpg";
import upright from "../assets/upright.png";

const arrows = [
  upright,
  upleft,
  camera,
  down,
  downleft,
  forward,
  right,
  left,
  right2,
  up,
  upright,
];

const PointAtCoolPerson = ({
  goToNextStage,
}: {
  goToNextStage: () => void;
}) => {
  const [currentArrow, setCurrentArrow] = useState(0);
  const [hasError, setHasError] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[350px]">
      <h1 className="text-2xl font-bold text-center mb-4">
        Please point at the coolest person in the room.
      </h1>
      <img src={arrows[currentArrow]} className="h-[200px] p-4" />
      <div className="flex gap-2 w-full">
        <button
          onClick={() => {
            const prevArrow =
              currentArrow === 0 ? arrows.length - 1 : currentArrow - 1;
            setCurrentArrow(prevArrow);
          }}
          className="px-4 py-2 w-fit h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          <FaArrowLeft className="w-[24px]" />
        </button>
        <button
          onClick={() => {
            const nextArrow =
              currentArrow === arrows.length - 1 ? 0 : currentArrow + 1;
            setCurrentArrow(nextArrow);
          }}
          className="px-4 py-2 w-fit h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          <FaArrowRight className="w-[24px]" />
        </button>
        <button
          onClick={() => {
            if (currentArrow === 2) {
              goToNextStage();
            } else {
              setHasError(true);
            }
          }}
          className="px-4 py-2 w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          Submit
        </button>
      </div>
      {hasError && (
        <p className="text-red-600 text-center mt-2 text-sm">
          Not correct! You must be a robot, get out of here.
        </p>
      )}
    </div>
  );
};

export default PointAtCoolPerson;
