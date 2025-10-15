import { Link } from "react-router";
import LogoIcon from "../../assets/devjobs.svg?react";

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <LogoIcon />
    </Link>
  );
};
