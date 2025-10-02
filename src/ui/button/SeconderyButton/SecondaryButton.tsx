import type { FC } from "react";
import type { BaseButtonProps } from "../types/BaseButtonProps";
import { BaseButton } from "../BaseButton/BaseButton";

export const SecondaryButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  return <BaseButton {...props} text={text} className="secondary-btn" />;
};
