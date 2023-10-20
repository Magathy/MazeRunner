import { useState } from "react";
import { Monsters } from "./characters/Monsters";
import { CombatSystem } from "./combatMechanic/CombatSystem";
import { Initiative } from "./combatMechanic/Initiative";
import { Monster } from "./characters/monstersList";
import "./monsterAppear.css";
import { Player, PlayerCharacteristics } from "./characters/Player";

export const MonsterAppear = ({
  monsterSet,
  currentStep,
  changeStep,
  rollCorridor,
  playerPvLeft,
  setPlayerPvLeft,
  retryMaze,
  choosenCorridor,
  playerStats,
  setPlayerStats,
}: {
  monsterSet: Monster;
  currentStep: string;
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  rollCorridor: number;
  playerPvLeft: number;
  setPlayerPvLeft: React.Dispatch<React.SetStateAction<number>>;
  retryMaze: () => void;
  choosenCorridor: string;
  playerStats: PlayerCharacteristics;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerCharacteristics>>;
}) => {
  const [initiativeRoll, setInititiveRoll] = useState<number | undefined>();
  const [monsterPvLeft, setMonsterPvLeft] = useState(monsterSet.pv);

  return (
    <>
      <div className="encounterLayout">
        <div className="presentationMonster">
          <div>{monsterSet.name}</div>
          <div>
            {monsterPvLeft}/{monsterSet.pv} PV
          </div>
          <img
            src={monsterSet.avatar}
            alt="monstre"
            className="imageOfMonster"
          ></img>
        </div>
        {currentStep === "battle" ? (
          <div className="middleItem">
            <CombatSystem
              monsterToFight={monsterSet}
              initiativeRoll={initiativeRoll}
              changeStep={changeStep}
              playerPVLeft={playerPvLeft}
              setPlayerPVLeft={setPlayerPvLeft}
              monsterPvLeft={monsterPvLeft}
              setMonsterPvLeft={setMonsterPvLeft}
              retryMaze={retryMaze}
              choosenCorridor={choosenCorridor}
            />
          </div>
        ) : (
          <>
            <div className="middleItem">
              <Monsters rollNumber={rollCorridor} choosenMonster={monsterSet} />
              <Initiative
                initiativeRoll={initiativeRoll}
                setInitiativeRoll={setInititiveRoll}
                changeStep={() => changeStep("battle")}
              />
            </div>
          </>
        )}

        <Player playerPvLeft={playerPvLeft} playerStats={playerStats} />
      </div>
    </>
  );
};
