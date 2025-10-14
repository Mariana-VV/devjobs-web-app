import { useMemo, useState } from "react";
import { JobList } from "./JobList";
import { useJob } from "./hooks/useJob";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import type { Job } from "../../types/Job";

const FULL_TiME = "Full Time";

const filterJobs = (
  jobs: Job[],
  location: string,
  query: string,
  employmentType: boolean
) => {
  let filteredJobs = [...jobs];

  if (query !== "") {
    return [...filteredJobs].filter((job) => {
      return (
        job.position.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  if (location !== "") {
    return [...filteredJobs].filter((job) => {
      return job.location.toLowerCase().includes(query.toLowerCase());
    });
  }

  if (employmentType) {
    {
      return (filteredJobs = filteredJobs.filter(
        (job) => job.contract === FULL_TiME
      ));
    }
  }

  console.log(filteredJobs);

  return filteredJobs;
};

export const JobPage = () => {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const { jobs } = useJob();
  // const [jobsToRender, setJobsToRender] = useState(jobs);

  // useMemo(() => {
  //   setJobsToRender(filterJobs(jobs, query, location, isFullTime));
  // }, [jobs, query, location, isFullTime]);

  return (
    <section className="mainPage">
      <div className="container">
        <SearchPanel
          setLocation={setLocation}
          setQuery={setQuery}
          setIsFullTime={setIsFullTime}
        />
        <JobList jobs={filterJobs(jobs, query, location, isFullTime)} />
      </div>
    </section>
  );
};
