import { ReactNode } from "react";
import "./button.css";
export const Button = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button className={"buttonStyle " + className} onClick={onClick}>
      {children}
    </button>
  );
};
