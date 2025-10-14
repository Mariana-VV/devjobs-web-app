import { Link } from "react-router";
import type { Job } from "../../types/Job";
import "./Job.scss";

type Props = {
  job: Job;
};

export const JobItem: React.FC<Props> = ({ job }) => {
  return (
    <div className="card">
      <span
        className="card__icon"
        style={{
          backgroundColor: `${job?.logoBackground}`,
          color: `${job.logo}`,
        }}
      >
        <img src={`${import.meta.env.BASE_URL}/${job?.logo}`} alt="" />
      </span>

      <div className="card__block">
        <div className="card__box">
          <div className="card__info">
            <p>{job?.postedAt}</p>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#6E8098" />
            </svg>

            <p>{job?.contract}</p>
          </div>
          <Link to={`/details/${job.id}`}>
            <h2 className="card__title title ">{job?.company}</h2>
          </Link>
          <p className="card__company">{job?.company}</p>
        </div>

        <div className="card__box">
          <p className="card__country">{job?.location}</p>
        </div>
      </div>
    </div>
  );
};
