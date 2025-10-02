import type { FC } from "react";
import type { BaseButtonProps } from "../../input/types/InputProps";

export const BaseButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  return (
    <button {...props} className="btn">
      {text}
    </button>
  );
};
