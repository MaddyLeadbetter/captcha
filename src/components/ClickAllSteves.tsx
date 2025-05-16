import { useState } from "react";
import { twMerge } from "tailwind-merge";
import bugs from "../assets/bugs.jpg";
import dave from "../assets/dave.jpg";
import dwayne from "../assets/dwayne.jpg";
import santa from "../assets/santa.png";
import seth from "../assets/seth.png";
import simon from "../assets/simon.jpg";
import snoop from "../assets/snoop.jpeg";
import spongebob from "../assets/spongebob.png";
import steve1 from "../assets/steve1.jpg";
import steve2 from "../assets/steve2.png";
import steve3 from "../assets/steve3.jpg";
import steve4 from "../assets/steve4.jpg";
import steve5 from "../assets/steve5.png";
import steve6 from "../assets/steve6.png";
import steve7 from "../assets/steve7.jpg";
import steve8 from "../assets/steve8.jpg";

const images = [
  steve1,
  bugs,
  steve2,
  spongebob,
  steve3,
  dwayne,
  dave,
  steve4,
  simon,
  steve5,
  snoop,
  steve6,
  steve7,
  santa,
  steve8,
  seth,
];

const correctSteves = [0, 2, 4, 7, 9, 11, 12, 14];

const ClickAllSteves = ({ goToNextStage }: { goToNextStage: () => void }) => {
  const [clickedImages, setClickedImages] = useState<number[]>([]);

  const handleImageClick = (index: number) => {
    if (!clickedImages.includes(index)) {
      setClickedImages([...clickedImages, index]);
    } else {
      setClickedImages(clickedImages.filter((i) => i !== index));
    }
  };

  const hasCorrectAnswer =
    clickedImages.length === 8 &&
    clickedImages.every((i) => correctSteves.includes(i));

  return (
    <div>
      <div className="grid grid-cols-4 gap-[1px] p-4">
        {images.map((src, index) => (
          <button
            key={index}
            className={twMerge(
              "cursor-pointer w-[80px] h-[80px]",
              clickedImages.includes(index) && "border-4 border-blue-500"
            )}
            onClick={() => handleImageClick(index)}
          >
            <img src={src} className="w-full h-full object-cover" alt="steve" />
          </button>
        ))}
      </div>
      <p className="text-center text-lg font-bold mb-6">
        Select all the images that contain a Steve.
      </p>
      <button
        onClick={goToNextStage}
        disabled={!hasCorrectAnswer}
        className="px-4 py-2 w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
      >
        Done
      </button>
    </div>
  );
};
export default ClickAllSteves;
