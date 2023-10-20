import "./rollDice.css";
import de20 from "./images/dice20.jpg";
import { randomNumber } from "./AskDirections";
import { categoryOfRoll } from "./Corridor";
import { Button } from "./styles/Button";

export const RollDice = ({
  rollNumber,
  setRollNumber,
  extraAction,
  numberOfIntersections,
}: {
  rollNumber?: number;
  setRollNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
  numberOfIntersections?: number;

  extraAction?: (params: string) => void;
}) => {
  const afterRolling = () => {
    const resultDice = randomNumber(1, 21 - (numberOfIntersections || 0));
    setRollNumber(resultDice);
    return resultDice;
  };

  return (
    <>
      <div className="diceLayout">
        <img className="image" src={de20} alt="dé 20 faces"></img>
        {!rollNumber && (
          <Button
            onClick={() => {
              const rolledNumber = afterRolling();
              extraAction?.(categoryOfRoll(rolledNumber));
            }}
          >
            Jette le dé
          </Button>
        )}
      </div>
    </>
  );
};
