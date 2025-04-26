import { useState } from "react";
import AiTest from "~/components/AiTest";
import ClickAllSteves from "~/components/ClickAllSteves";
import FindWaldo from "~/components/FindWaldo";
import Modal from "~/components/Modal";
import PointAtCoolPerson from "~/components/PointAtCoolPerson";
import Spinner from "~/components/Spinner";
import Timer from "~/components/Timer";
import RandomWordGenerator from "~/components/WordArtGenerator";
import recaptcha from "../assets/recaptcha.png";
import robodance from "../assets/robodance.gif";

type Stage =
  | "start"
  | "click"
  | "wordart"
  | "hiddenimage"
  | "steves"
  | "loveai"
  | "pointing"
  | "done";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState<Stage>("start");
  const [loading, setLoading] = useState(false);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-[450px] h-fit px-6 py-9 bg-blue-50 rounded-lg flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <h2 className="text-sm font-bold text-center mb-2">
          ABSOLUTELY NO ROBOTS ALLOWED
        </h2>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          onClick={() => setStage("click")}
          disabled={!email || !password}
          className="px-4 py-2 w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer disabled:bg-blue-500/15"
        >
          Register
        </button>
      </div>

      {stage !== "start" && stage !== "done" && (
        <Timer sendBackToStart={() => setStage("start")} />
      )}

      {stage === "click" && (
        <Modal>
          <input
            type="checkbox"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setStage("wordart");
                setLoading(false);
              }, 3000);
            }}
            className="w-6 h-6 cursor-pointer"
          />
          <p className="text-lg text-center mr-6">I am not a robot</p>
          {loading && <Spinner />}
          <img className="h-[48px] w-[48px]" src={recaptcha} />
        </Modal>
      )}

      {stage === "wordart" && (
        <Modal>
          <div className="w-full">
            <RandomWordGenerator
              goToNextStage={() => setStage("hiddenimage")}
            />
          </div>
        </Modal>
      )}

      {stage === "hiddenimage" && (
        <Modal>
          <FindWaldo goToNextStage={() => setStage("steves")} />
        </Modal>
      )}

      {stage === "steves" && (
        <Modal>
          <ClickAllSteves goToNextStage={() => setStage("loveai")} />
        </Modal>
      )}

      {stage === "loveai" && (
        <Modal>
          <AiTest goToNextStage={() => setStage("pointing")} />
        </Modal>
      )}

      {stage === "pointing" && (
        <Modal>
          <PointAtCoolPerson goToNextStage={() => setStage("done")} />
        </Modal>
      )}

      {stage === "done" && (
        <Modal>
          <div className="w-full flex items-center justify-center flex-col font-robot max-w-[450px]">
            <h1 className="mb-4 font-bold text-xl text-center">
              You fell into our trap, puny human!
            </h1>
            <img src={robodance} className="h-[200px] py-4" />
            <p className="text-sm mb-2 text-center">
              You are now registered as a human in our global database. A robot
              is on its way to steal your job.
            </p>
            <p className="text-sm text-center">Sucks to be you I guess!</p>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Main;
