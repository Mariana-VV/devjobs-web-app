import type { FC } from "react";
import type { BaseButtonProps } from "../types/BaseButtonProps";

export const BaseButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  return (
    <button {...props} className="btn">
      {text}
    </button>
  );
};
