import type { FC } from "react";
import type { Props } from "../types/Props";

export const BaseButton: FC<Props> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};
