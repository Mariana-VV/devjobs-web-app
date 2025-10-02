import type { FC } from "react";
import type { Props } from "../types/Props";
import { BaseButton } from "../BaseButton/BaseButton";

export const SeconderyButton: FC<Props> = ({ text, ...props }) => {
  return <BaseButton {...props} text={text} className="btn" />;
};
