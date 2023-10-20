import { Monster } from "./monstersList";
import "./monster.css";
import { TextStyle } from "../styles/TextStyle";

export const Monsters = ({
  rollNumber,
  choosenMonster,
}: {
  rollNumber: number;
  choosenMonster: Monster;
}) => {
  return (
    <>
      <TextStyle>
        <div> Vous avez obtenu {rollNumber}</div>
        <div> Un {choosenMonster.name} apparait et vous attaque!</div>
      </TextStyle>
    </>
  );
};
