import { Fragment } from "react";
import "./askDirections.css";
import corridor from "./images/couloir.jpeg";
import { Button } from "./styles/Button";

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
const arrayOfDIrection = ["gauche", "droite", "devant"];

export const AskDirections = ({ addToCount }: { addToCount: () => void }) => {
  const howManyDirections = randomNumber(1, 4);
  let newDirections: string[] = [];
  while (newDirections.length < howManyDirections) {
    const directions = arrayOfDIrection[randomNumber(0, 3)];
    if (!newDirections.includes(directions)) {
      newDirections = [...newDirections, directions];
    }
  }
  const choiceOfDirections = newDirections.map((choice) => {
    return (
      <Fragment key={choice}>
        <div className={"layout " + choice}>
          <div className="wrappingButton">
            <Button key={choice} onClick={() => addToCount()}>
              {choice}{" "}
            </Button>
          </div>
          <img className="corridorImage" src={corridor} alt="couloir"></img>
        </div>
      </Fragment>
    );
  });

  return <>{choiceOfDirections}</>;
};
