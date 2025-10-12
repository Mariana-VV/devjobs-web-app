import type { FC } from "react";
import { BaseButton } from "../BaseButton/BaseButton";
import type { BaseButtonProps } from "../types/BaseButtonProps";
import "./MainButton.scss";

export const MainButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  return <BaseButton {...props} text={text} className="button--main" />;
};
