import joueur from "../images/joueur.jpg";
import { TextStyle } from "../styles/TextStyle";

import { Character } from "./monstersList";
import "./player.css";

export type PlayerCharacteristics = Character & {
  physResist: number;
  magResist: number;
};

export const player: PlayerCharacteristics = {
  name: "Arnaud",
  pv: 80,
  physDamages: 10,
  magDamages: 10,
  physResist: 5,
  magResist: 5,
  speed: 5,
  avatar: joueur,
};

export const Player = ({
  playerPvLeft,
  playerStats,
}: {
  playerPvLeft: number;
  playerStats: PlayerCharacteristics;
}) => {
  return (
    <>
      <div className="allPlayerLayout">
        <div className="presentationPlayer">
          <img
            src={player.avatar}
            alt="joueur"
            className="avatarOfPlayer"
          ></img>
          <div>{player.name}</div>
          <div>
            {" "}
            {playerPvLeft} / {player.pv} PV
          </div>
        </div>
        <div className="statsDisplay">
          <div className="statsLayout">
            <TextStyle className="WrapUpStats">
              <div> Dégats magiques : {playerStats.magDamages}</div>
              <div>Dégats physiques : {playerStats.physDamages}</div>
              <div> Résistence magique: {playerStats.magResist}</div>
              <div>Résistence physique: {player.physResist}</div>
              <div>Vitesse: {player.speed}</div>
            </TextStyle>
          </div>
        </div>
      </div>
    </>
  );
};
