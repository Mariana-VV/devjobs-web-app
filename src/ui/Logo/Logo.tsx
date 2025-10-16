import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={`/src/assets/images/devjobs.svg`} alt="logo" />
    </Link>
  );
};
