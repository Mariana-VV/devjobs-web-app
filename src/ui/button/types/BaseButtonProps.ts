import type { ButtonHTMLAttributes } from "react";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};
