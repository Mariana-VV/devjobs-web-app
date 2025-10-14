import type React from "react";
import type { ChangeEvent } from "react";
import "./SearchPanel.scss";

import Search from "../../assets/images/search.svg?react";
import Location from "../../assets/images/location.svg?react";
import { Input } from "../../ui/input/Input/Input";
import { MainButton } from "../../ui/button/MainButton/MainButton";

type Props = {
  setLocation: (location: string) => void;
  setQuery: (query: string) => void;
  setIsFullTime: (isFullTime: boolean) => void;
};

export const SearchPanel: React.FC<Props> = ({
  setLocation,
  setQuery,
  setIsFullTime,
}) => {
  function handleSetLocation(e: ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }

  function handleSetQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSetIsFullTime(e: ChangeEvent<HTMLInputElement>) {
    setIsFullTime(e.target.checked);
  }

  return (
    <div className="search-panel">
      <Input
        placeholder="Filter by title, companies, expertise..."
        Icon={Search}
        onChange={() => handleSetQuery}
      />
      <Input
        placeholder="Filter by location..."
        Icon={Location}
        onChange={() => handleSetLocation}
      />

      <div className="search-panel__full-time">
        <input type="checkbox" onChange={() => handleSetIsFullTime} />
        <label htmlFor="">Full Time Only</label>
        <MainButton text="Search" />
      </div>
    </div>
  );
};
