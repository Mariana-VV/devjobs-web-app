import type React from "react";
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
  setQuery,
  setLocation,
  setIsFullTime,
}) => {
  return (
    <div className="search-panel">
      <Input
        placeholder="Filter by title, companies, expertise..."
        Icon={Search}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Input
        placeholder="Filter by location..."
        Icon={Location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <div className="search-panel__full-time">
        <input
          type="checkbox"
          onChange={(e) => setIsFullTime(e.target.checked)}
        />
        <label htmlFor="">Full Time Only</label>
        <MainButton text="Search" />
      </div>
    </div>
  );
};
