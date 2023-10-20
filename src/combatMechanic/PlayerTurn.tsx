import { useState } from "react";
import { Monster } from "../characters/monstersList";
import { player } from "../characters/Player";
import { Button } from "../styles/Button";
import { TextStyle } from "../styles/TextStyle";
import "./playerTurn.css";

export const PlayerTurn = ({
  monsterToFight,
  changeStep,
  isMonsterTurn,
  setIsMonsterTurn,
  monsterPvLeft,
  setMonsterPvLeft,
  choosenCorridor,
}: {
  monsterToFight: Monster;
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  isMonsterTurn: boolean;
  setIsMonsterTurn: React.Dispatch<React.SetStateAction<boolean>>;
  monsterPvLeft: number;
  setMonsterPvLeft: React.Dispatch<React.SetStateAction<number>>;
  choosenCorridor: string;
}) => {
  const [choosenWeapon, setChoosenWeapon] = useState("");
  const [isCombatOngoing, setIsCombatOngoing] = useState(true);
  console.log("PlayerTurn" + isMonsterTurn);

  if (choosenWeapon === "sword") {
    if (monsterToFight.physResist === "none") {
      const damagePhysDoneToMonster = monsterPvLeft - player.physDamages;
      return (
        <>
          <div className="playerTurnLayout">
            <TextStyle>
              Vous avez fait {player.physDamages} de dégats à{" "}
              {monsterToFight.name}
            </TextStyle>
            {monsterPvLeft > player.physDamages ? (
              <Button
                onClick={() => {
                  setIsMonsterTurn(true);
                  setMonsterPvLeft(damagePhysDoneToMonster);
                }}
              >
                Continuer le combat
              </Button>
            ) : choosenCorridor !== "failure" && choosenCorridor !== "boss" ? (
              <>
                <TextStyle>Vous avez vaincu {monsterToFight.name} </TextStyle>
                <Button
                  onClick={() => {
                    changeStep("battleEnded");
                  }}
                >
                  Mettre fin au combat
                </Button>
              </>
            ) : (
              <>
                <TextStyle>Vous avez vaincu {monsterToFight.name} </TextStyle>
                <Button
                  onClick={() => {
                    changeStep("corridorEnded");
                  }}
                >
                  Mettre fin au combat
                </Button>
              </>
            )}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="playerTurnLayout">
          <TextStyle>Le monstre est immmunisé au dégats d'épée!</TextStyle>
          <Button
            onClick={() => {
              setIsMonsterTurn(true);
            }}
          >
            Continuer le combat
          </Button>
        </div>
      </>
    );
  }

  if (choosenWeapon === "wood") {
    if (monsterToFight.magResist === "none") {
      const damageMagDoneToMonster = monsterPvLeft - player.magDamages;

      return (
        <>
          <div className="playerTurnLayout">
            <TextStyle>
              <div>
                Vous avez fait {player.magDamages} de dégats à{" "}
                {monsterToFight.name}
              </div>
            </TextStyle>
            {monsterPvLeft > player.magDamages ? (
              <Button
                onClick={() => {
                  setIsMonsterTurn(true);
                  setMonsterPvLeft(damageMagDoneToMonster);
                }}
              >
                Continuer le combat
              </Button>
            ) : choosenCorridor !== "failure" && choosenCorridor !== "boss" ? (
              <>
                <TextStyle>Vous avez vaincu {monsterToFight.name} </TextStyle>
                <Button
                  onClick={() => {
                    changeStep("battleEnded");
                  }}
                >
                  Mettre fin au combat
                </Button>
              </>
            ) : (
              <>
                <TextStyle>Vous avez vaincu {monsterToFight.name} </TextStyle>
                <Button
                  onClick={() => {
                    changeStep("corridorEnded");
                  }}
                >
                  Mettre fin au combat
                </Button>
              </>
            )}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="playerTurnLayout">
          <TextStyle>
            <div>Le monstre est immunisé à la magie!</div>
          </TextStyle>
          <Button
            onClick={() => {
              setIsMonsterTurn(true);
            }}
          >
            continuer le combat
          </Button>
        </div>
      </>
    );
  }

  if (isCombatOngoing) {
    return (
      <>
        <div className="playerTurnLayout">
          <TextStyle>Choisis ton arme</TextStyle>
          <div className="spaceButton">
            <Button
              onClick={() => {
                setChoosenWeapon("sword");
                setIsCombatOngoing(!isCombatOngoing);
              }}
            >
              Epée
            </Button>
            <Button
              onClick={() => {
                setChoosenWeapon("wood");
                setIsCombatOngoing(!isCombatOngoing);
              }}
            >
              Bâton
            </Button>
          </div>
        </div>
      </>
    );
  }

  return <div> tu t'es plantée quelque part</div>;
};
