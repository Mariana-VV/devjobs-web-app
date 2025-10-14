import "../../App.scss";
import type { Job } from "../../types/Job";
import { JobItem } from "./JobItem";

type Props = {
  jobs: Job[];
};

export const JobList: React.FC<Props> = ({ jobs }) => {
  return (
    <section className="board">
      <div className="container">
        <div className="board__block">
          {jobs.map((job: Job) => (
            <JobItem job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
