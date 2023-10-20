import { Button } from "../styles/Button";
import statue from "../images/statue.jpg";
import "./statue.css";
import { TextStyle } from "../styles/TextStyle";
import { player } from "../characters/Player";

export const Statue = ({
  changeStep,
  setPlayerPvLeft,
}: {
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  setPlayerPvLeft: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <img src={statue} alt="statue de guérison" className="statuePicture" />
      <TextStyle>
        {" "}
        Recevez la bénédiction de la statue pour régénérer vos PV
      </TextStyle>
      <Button
        onClick={() => {
          changeStep("corridorEnded");
          setPlayerPvLeft(player.pv);
        }}
      >
        Accepter la bénédiction de la statue
      </Button>
    </>
  );
};
