import type { Position } from "../../types/Position";
import "../../App.scss";
import "./CardList.scss";
import { Card } from "../Card/Card";

type Props = {
  positions: Position[];
};

export const CardList: React.FC<Props> = ({ positions }) => {
  return (
    <section className="board">
      <div className="container">
        <div className="board__block">
          {positions.map((position: Position) => (
            <Card position={position} key={position.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
