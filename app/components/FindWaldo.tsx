import { useEffect, useState } from "react";
import waldoImage from "../assets/waldo.png";

const FindWaldo = ({ goToNextStage }: { goToNextStage: () => void }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const placeImageRandomly = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 140)); // Subtract image height
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100)); // Subtract image width
    setPosition({ top: randomTop, left: randomLeft });
  };

  useEffect(() => {
    placeImageRandomly();
  }, []);

  return (
    <>
      <div className="min-h-[240px] flex flex-col items-center justify-center">
        <p className="text-lg">
          Find waldo! He will appear once you hover over him.
        </p>
      </div>
      <img
        id="waldo"
        src={waldoImage}
        alt="Waldo"
        style={{ top: position.top, left: position.left }}
        onClick={goToNextStage}
        className="absolute w-[140px] h-[100px] opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer z-100"
      />
    </>
  );
};

export default FindWaldo;
