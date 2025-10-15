import { useState } from "react";
import { JobList } from "./JobList";
import { useJob } from "./hooks/useJob";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import type { Job } from "../../types/Job";

const FULL_TIME = "Full Time";

const filterJobs = (
  jobs: Job[],
  query: string,
  location: string,
  employmentType: boolean
) => {
  let filteredJobs = jobs;

  if (query.trim()) {
    filteredJobs = [...filteredJobs].filter((job) => {
      return (
        job.position.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  if (location.trim()) {
    filteredJobs = [...filteredJobs].filter((job) => {
      return job.location.toLowerCase().includes(location.toLowerCase());
    });
  }

  if (employmentType) {
    filteredJobs = filteredJobs.filter((job) => job.contract === FULL_TIME);
  }

  return filteredJobs;
};

export const JobPage = () => {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const { jobs } = useJob();

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
