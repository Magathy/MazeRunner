import { randomNumber } from "../AskDirections";
import { Button } from "../styles/Button";
import { TextStyle } from "../styles/TextStyle";
import { lootsList } from "./lootsList";
import "./loots.css";
import { ChangeStatsPlayer } from "./ChangeStatsPlayer";
import { PlayerCharacteristics } from "../characters/Player";

export const Loots = ({
  typeOfSuccess,
  changeStep,
  playerStats,
  setPlayerStats,
}: {
  typeOfSuccess: string;
  changeStep: React.Dispatch<React.SetStateAction<string>>;
  playerStats: PlayerCharacteristics;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerCharacteristics>>;
}) => {
  let category = "";
  if (typeOfSuccess === "criticalSuccess") {
    category = "success";
  } else {
    category = "normal";
  }
  const randomLoot = lootsList.filter((loot) => loot.category === category);
  const selectedLoot = randomLoot[randomNumber(0, randomLoot.length)];
  if (category === "success") {
    return (
      <>
        <div className="lootPageLayout">
          <img
            src={selectedLoot.avatar}
            alt={selectedLoot.name}
            className="pictureOfLoot"
          ></img>
          <TextStyle>
            <div>
              Vous avez trouvé un(e) {selectedLoot.name} dans un coffre!
              <ChangeStatsPlayer
                selectedLoot={selectedLoot}
                playerStats={playerStats}
                setPlayerStats={setPlayerStats}
              />
            </div>
          </TextStyle>
          <Button onClick={() => changeStep("statue")}>
            Continuer à explorer le couloir
          </Button>
        </div>
      </>
    );
  }
  if (typeOfSuccess === "success") {
    return (
      <>
        <div className="lootPageLayout">
          <img
            src={selectedLoot.avatar}
            alt={selectedLoot.name}
            className="pictureOfLoot"
          ></img>
          <TextStyle>
            <div>Le monstre à laissé tombé un(e) {selectedLoot.name}!</div>
            <div>
              {" "}
              <ChangeStatsPlayer
                selectedLoot={selectedLoot}
                playerStats={playerStats}
                setPlayerStats={setPlayerStats}
              />
            </div>
          </TextStyle>
          <Button
            onClick={() => {
              changeStep("statue");
              setPlayerStats((currentPlayerStats) => ({
                ...currentPlayerStats,
                pv: currentPlayerStats.pv + selectedLoot.pv,
                physDamages:
                  currentPlayerStats.physDamages + selectedLoot.physDamages,
                magDamages:
                  currentPlayerStats.magDamages + selectedLoot.magDamages,
                physResist:
                  currentPlayerStats.physResist + selectedLoot.physResist,
                magResist:
                  currentPlayerStats.magResist + selectedLoot.magResist,
                speed: currentPlayerStats.speed + selectedLoot.speed,
              }));
            }}
          >
            Continuer d'explorer le couloir
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="lootPageLayout">
        <img
          src={selectedLoot.avatar}
          alt={selectedLoot.name}
          className="pictureOfLoot"
        ></img>
        <TextStyle>
          <div>Le monstre à laissé tombé un(e) {selectedLoot.name}!</div>

          <ChangeStatsPlayer
            selectedLoot={selectedLoot}
            playerStats={playerStats}
            setPlayerStats={setPlayerStats}
          />
        </TextStyle>
        <Button onClick={() => changeStep("corridorEnded")}>
          Revenir au labyrinthe
        </Button>
      </div>
    </>
  );
};
