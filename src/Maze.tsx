import "./maze.css";
import { AskDirections, randomNumber } from "./AskDirections";
import { useState } from "react";
import { RollDice } from "./RollDice";
import { Monster, monstersList } from "./characters/monstersList";
import { Player, PlayerCharacteristics, player } from "./characters/Player";
import { Corridor } from "./Corridor";
import { TextStyle } from "./styles/TextStyle";
import { Button } from "./styles/Button";

export const extractMonsters = (category: string): Monster => {
  const rangeOfMonsters = monstersList.filter(
    (monster) => monster.category === category
  );
  const choosenMonster =
    rangeOfMonsters[randomNumber(0, rangeOfMonsters.length)];

  return choosenMonster;
};

export const Maze = () => {
  const [numberOfIntersections, setNumberOfIntersections] = useState(0);
  const [isGameOnGoing, setIsGameOnGoing] = useState(true);
  const [isDirectionChoose, setIsDirectionChoose] = useState(false);
  const [rollCorridor, setRollCorridor] = useState<number | undefined>();
  const [corridorMonster, setCorridorMonster] = useState<Monster>();
  const [isNewPathNeeded, setIsNewPathNeeded] = useState(false);
  const [currentStep, SetCurrentStep] = useState("start");
  const [playerStats, setPlayerStats] = useState<PlayerCharacteristics>(player);
  const resetGame = () => {
    setIsDirectionChoose(false);
    setIsNewPathNeeded(false);
    setRollCorridor(undefined);
    SetCurrentStep("start");
  };
  const [playerPvLeft, setPlayerPvLeft] = useState(player.pv);
  const retryMaze = () => {
    setIsDirectionChoose(false);
    setIsNewPathNeeded(false);
    setRollCorridor(undefined);
    SetCurrentStep("start");
    setNumberOfIntersections(0);
    setPlayerPvLeft(player.pv);
    setIsGameOnGoing(true);
  };

  if (isGameOnGoing) {
    if (rollCorridor && corridorMonster && currentStep !== "start") {
      return (
        <Corridor
          rollCorridor={rollCorridor}
          monsterSet={corridorMonster}
          changeStep={SetCurrentStep}
          currentStep={currentStep}
          resetGame={resetGame}
          playerPvLeft={playerPvLeft}
          setPlayerPvLeft={setPlayerPvLeft}
          retryMaze={retryMaze}
          setIsGameOnGoing={setIsGameOnGoing}
          playerStats={playerStats}
          setPlayerStats={setPlayerStats}
        />
      );
    }

    if (isDirectionChoose && isNewPathNeeded) {
      return (
        <RollDice
          rollNumber={rollCorridor}
          setRollNumber={setRollCorridor}
          numberOfIntersections={numberOfIntersections}
          extraAction={(category: string) => {
            setCorridorMonster(extractMonsters(category));
            SetCurrentStep("corridor");
          }}
        />
      );
    }

    if (!isNewPathNeeded) {
      return (
        <>
          <div className="pageStyle">
            <div className="wrappingChoice">
              <AskDirections
                addToCount={() => {
                  setNumberOfIntersections(numberOfIntersections + 1);
                  setIsDirectionChoose(!isDirectionChoose);
                  setIsNewPathNeeded(!isNewPathNeeded);
                }}
              />
            </div>
            <Player playerPvLeft={playerPvLeft} playerStats={playerStats} />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="pageStyle">
          <div className="wrappingChoice">
            <AskDirections
              addToCount={() => {
                setNumberOfIntersections(numberOfIntersections + 1);
                setIsDirectionChoose(!isDirectionChoose);
                setIsNewPathNeeded(!isNewPathNeeded);
              }}
            />
          </div>
          <img src={player.avatar} alt="player"></img>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="endGameLayout">
        <TextStyle>Merci d'avoir joué ^^</TextStyle>
        <Button onClick={() => retryMaze()}>Rejouer</Button>
      </div>
    </>
  );
};
