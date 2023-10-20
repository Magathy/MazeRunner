import { ReactNode } from "react";
import "./textStyle.css";

export const TextStyle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: String;
}) => {
  return <div className={"textStyle " + className}>{children}</div>;
};
