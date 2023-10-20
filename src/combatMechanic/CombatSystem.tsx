import { Monster } from "../characters/monstersList";
import { player } from "../characters/Player";
import { randomNumber } from "../AskDirections";
import { PlayerTurn } from "./PlayerTurn";
import "./combatSystem.css";
import { TextStyle } from "../styles/TextStyle";
import { useMemo, useState } from "react";
import { Button } from "../styles/Button";

export const CombatSystem = ({
  monsterToFight,
  initiativeRoll,
  changeStep,
  playerPVLeft,
  setPlayerPVLeft,
  setMonsterPvLeft,
  monsterPvLeft,
  retryMaze,
  choosenCorridor,
}: {
  monsterToFight: Monster;
  initiativeRoll?: number;
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  playerPVLeft: number;
  setPlayerPVLeft: React.Dispatch<React.SetStateAction<number>>;
  setMonsterPvLeft: React.Dispatch<React.SetStateAction<number>>;
  monsterPvLeft: number;
  retryMaze: () => void;
  choosenCorridor: string;
}) => {
  const initiativePlayer = (initiativeRoll ?? 0) + player.speed;

  const initiativeMonster = useMemo(
    () => randomNumber(1, 21) + monsterToFight.speed,
    []
  );

  const [isMonsterTurn, setIsMonsterTurn] = useState(true);
  console.log("combatSystem ", isMonsterTurn);

  if (
    initiativeMonster > initiativePlayer &&
    monsterToFight.physDamages === 0 &&
    isMonsterTurn
  ) {
    const pvToTake = monsterToFight.magDamages - player.magResist;
    const pvLeft = playerPVLeft - pvToTake;

    return (
      <div className="fightLayout">
        <TextStyle>
          {monsterToFight.name} vous attaque et vous fait{" "}
          {monsterToFight.magDamages - player.magResist} de dégats magiques! Il
          vous reste {pvLeft} PV
        </TextStyle>
        {pvLeft > 0 ? (
          <Button
            onClick={() => {
              setPlayerPVLeft(pvLeft);
              setIsMonsterTurn(false);
            }}
          >
            Contre-attaquer
          </Button>
        ) : (
          <>
            <TextStyle>
              Vous avez succombé aux coups de {monsterToFight.name}
            </TextStyle>{" "}
            <Button onClick={() => retryMaze()}>
              Réessayer de défier le labyrinthe
            </Button>
          </>
        )}
      </div>
    );
  }

  if (
    initiativeMonster > initiativePlayer &&
    monsterToFight.magDamages === 0 &&
    isMonsterTurn
  ) {
    const pvToTake = monsterToFight.physDamages - player.physResist;
    const pvLeft = playerPVLeft - pvToTake;

    return (
      <div className="fightLayout">
        <TextStyle>
          {monsterToFight.name} vous attaque et vous fait{" "}
          {monsterToFight.physDamages - player.physResist} de dégats physiques!
          Il vous reste {pvLeft} PV
        </TextStyle>
        {pvLeft > 0 ? (
          <Button
            onClick={() => {
              setPlayerPVLeft(pvLeft);
              setIsMonsterTurn(false);
            }}
          >
            Contre-attaquer
          </Button>
        ) : (
          <>
            <TextStyle>
              Vous avez succombé aux coups de {monsterToFight.name}
            </TextStyle>{" "}
            <Button onClick={() => retryMaze()}>
              Réessayer de défier le labyrinthe
            </Button>
          </>
        )}
      </div>
    );
  }

  if (initiativePlayer >= initiativeMonster && isMonsterTurn) {
    return (
      <>
        <TextStyle>Vous avez gagné le jet d'initiative.</TextStyle>
        <Button onClick={() => setIsMonsterTurn(false)}>
          {" "}
          Attaquez le monstre!
        </Button>
      </>
    );
  }

  if (!isMonsterTurn) {
    return (
      <PlayerTurn
        monsterToFight={monsterToFight}
        changeStep={changeStep}
        isMonsterTurn={isMonsterTurn}
        setIsMonsterTurn={setIsMonsterTurn}
        monsterPvLeft={monsterPvLeft}
        setMonsterPvLeft={setMonsterPvLeft}
        choosenCorridor={choosenCorridor}
      />
    );
  }

  return null;
};
