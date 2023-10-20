import { useState } from "react";
import { RollDice } from "../RollDice";
import { Button } from "../styles/Button";

export const Initiative = ({
  initiativeRoll,
  setInitiativeRoll,
  changeStep,
}: {
  initiativeRoll: number | undefined;
  setInitiativeRoll: React.Dispatch<React.SetStateAction<number | undefined>>;
  changeStep: () => void;
}) => {
  const [shouldIAskToRoll, setShouldIAskToRoll] = useState(true);
  if (shouldIAskToRoll) {
    return (
      <Button onClick={() => setShouldIAskToRoll(!shouldIAskToRoll)}>
        Lance le dé pour débutter le combat
      </Button>
    );
  }
  return (
    <>
      <RollDice
        rollNumber={initiativeRoll}
        setRollNumber={setInitiativeRoll}
        extraAction={() => changeStep()}
      />
    </>
  );
};
