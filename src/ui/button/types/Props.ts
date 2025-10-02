import type { ButtonHTMLAttributes } from "react";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};
