import "./SearchPanel.scss";

import Search from "../../assets/images/search.svg?react";
import Location from "../../assets/images/location.svg?react";
import { Input } from "../../ui/input/Input/Input";
import { MainButton } from "../../ui/button/MainButton/MainButton";
import type { FC } from "react";

type Props = {
  setLocation: (location: string) => void;
  setQuery: (query: string) => void;
  setIsFullTime: (isFullTime: boolean) => void;
};

export const SearchPanel: FC<Props> = ({
  setQuery,
  setLocation,
  setIsFullTime,
}) => {
  return (
    <div className="search-panel">
      <Input
        placeholder="Filter by title, companies, expertise..."
        Icon={Search}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Input
        placeholder="Filter by location..."
        Icon={Location}
        onChange={(event) => setLocation(event.target.value)}
      />

      <div className="search-panel__full-time">
        <input
          type="checkbox"
          onChange={(event) => setIsFullTime(event.target.checked)}
        />
        <label htmlFor="">Full Time Only</label>
        <MainButton text="Search" />
      </div>
    </div>
  );
};
