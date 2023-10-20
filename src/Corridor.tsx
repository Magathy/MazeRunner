import { channel } from "diagnostics_channel";
import { Monster, monstersList } from "./characters/monstersList";
import { Loots } from "./items/Loots";
import { Statue } from "./items/Statue";
import { MonsterAppear } from "./MonsterAppear";
import { Button } from "./styles/Button";
import { Player, PlayerCharacteristics, player } from "./characters/Player";
import { TextStyle } from "./styles/TextStyle";
import "./corridor.css";
import { useState } from "react";

export const categoryOfRoll = (rollCorridor: number) => {
  if (rollCorridor === 20) {
    return "criticalSuccess";
  }
  if (rollCorridor >= 15 && rollCorridor <= 19) {
    return "success";
  }
  if (rollCorridor >= 10 && rollCorridor <= 14) {
    return "partialSuccess";
  }
  if (rollCorridor >= 5 && rollCorridor <= 9) {
    return "partialFailure";
  }
  if (rollCorridor >= 2 && rollCorridor <= 4) {
    return "failure";
  }
  if (rollCorridor === 1) {
    return "boss";
  }

  return "oups";
};

export const Corridor = ({
  resetGame,
  rollCorridor,
  monsterSet,
  playerPvLeft,
  setPlayerPvLeft,
  changeStep,
  currentStep,
  retryMaze,
  setIsGameOnGoing,
  playerStats,
  setPlayerStats,
}: {
  rollCorridor: number;
  monsterSet: Monster;
  playerPvLeft: number;
  setPlayerPvLeft: React.Dispatch<React.SetStateAction<number>>;
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  currentStep: string;
  resetGame: () => void;
  retryMaze: () => void;
  setIsGameOnGoing: React.Dispatch<React.SetStateAction<boolean>>;
  playerStats: PlayerCharacteristics;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerCharacteristics>>;
}) => {
  const choosenCorridor = categoryOfRoll(rollCorridor);
  console.log("catégorie du couloir", categoryOfRoll(rollCorridor));
  console.log("catégorie du monstre", monsterSet.category);

  if (currentStep === "corridorEnded" && choosenCorridor !== "boss") {
    return (
      <>
        <div className="stepLayout">
          <Button onClick={() => resetGame()}>
            Clique ici pour choisir un nouveau chemin
          </Button>
        </div>
      </>
    );
  }
  if (currentStep === "corridorEnded" && choosenCorridor === "boss") {
    return (
      <>
        <div className="stepLayout">
          <TextStyle>
            Félicitations! Vous avez vaincu le boss du Labyrinthe!{" "}
          </TextStyle>
          <Button onClick={() => setIsGameOnGoing(false)}>
            Sortir du labyrinthe
          </Button>
        </div>
      </>
    );
  }
  if (
    (currentStep === "statue" && choosenCorridor === "success") ||
    (currentStep === "statue" && choosenCorridor === "partialSuccess") ||
    (currentStep === "statue" && choosenCorridor === "criticalSuccess")
  ) {
    return (
      <>
        <div className="stepLayout">
          <Statue changeStep={changeStep} setPlayerPvLeft={setPlayerPvLeft} />
          <Player playerPvLeft={playerPvLeft} playerStats={playerStats} />
        </div>
      </>
    );
  }
  if (
    currentStep === "battleEnded" &&
    choosenCorridor !== "failure" &&
    currentStep === "battleEnded" &&
    choosenCorridor !== "boss"
  ) {
    return (
      <Loots
        typeOfSuccess={choosenCorridor}
        changeStep={changeStep}
        playerStats={playerStats}
        setPlayerStats={setPlayerStats}
      />
    );
  }

  if (choosenCorridor === "criticalSuccess" && currentStep === "corridor") {
    return (
      <div className="stepLayout">
        <TextStyle>le jet est de {rollCorridor} </TextStyle>
        <Loots
          typeOfSuccess={choosenCorridor}
          changeStep={changeStep}
          playerStats={playerStats}
          setPlayerStats={setPlayerStats}
        />
      </div>
    );
  }

  if (choosenCorridor) {
    return (
      <>
        <MonsterAppear
          monsterSet={monsterSet}
          rollCorridor={rollCorridor}
          changeStep={changeStep}
          currentStep={currentStep}
          playerPvLeft={playerPvLeft}
          setPlayerPvLeft={setPlayerPvLeft}
          retryMaze={retryMaze}
          choosenCorridor={choosenCorridor}
          playerStats={playerStats}
          setPlayerStats={setPlayerStats}
        />
      </>
    );
  }

  return <div> ca ne marche pas {rollCorridor}</div>;
};
