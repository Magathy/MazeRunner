import { PlayerCharacteristics } from "../characters/Player";

import { loot } from "./lootsList";

export const ChangeStatsPlayer = ({
  selectedLoot,
  playerStats,
  setPlayerStats,
}: {
  selectedLoot: loot;
  playerStats: PlayerCharacteristics;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerCharacteristics>>;
}) => {
  if (selectedLoot.magDamages > 0) {
    return (
      <>
        <div>
          {" "}
          cet objet augmente votre statitique de dégats magiques de{" "}
          {selectedLoot.magDamages}
        </div>
      </>
    );
  }
  if (selectedLoot.physDamages > 0) {
    return (
      <>
        <div>
          {" "}
          cet objet augmente votre statitique de dégats physiques de{" "}
          {selectedLoot.physDamages}
        </div>
      </>
    );
  }
  if (selectedLoot.magResist > 0) {
    return (
      <>
        <div>
          {" "}
          cet objet augmente votre statitique de résistence magiques de{" "}
          {selectedLoot.magResist}
        </div>
      </>
    );
  }
  if (selectedLoot.physResist > 0) {
    return (
      <>
        <div>
          {" "}
          cet objet augmente votre statitique de résistence physiques de{" "}
          {selectedLoot.physResist}
        </div>
      </>
    );
  }
  if (selectedLoot.pv > 0) {
    return (
      <>
        <div> cet objet augmente vos points de vie de {selectedLoot.pv}</div>
      </>
    );
  }
  if (selectedLoot.speed > 0) {
    return (
      <>
        <div> cet objet augmente votre Vitesse {selectedLoot.speed}</div>
      </>
    );
  }

  return <div></div>;
};
