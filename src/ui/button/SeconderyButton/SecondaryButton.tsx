import type { FC } from "react";
import type { BaseButtonProps } from "../types/BaseButtonProps";
import { BaseButton } from "../BaseButton/BaseButton";
import "./SecondaryButton.scss";

export const SecondaryButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  const { className } = props;
  return (
    <BaseButton
      {...props}
      text={text}
      className={`${className}secondary-button`}
    />
  );
};
