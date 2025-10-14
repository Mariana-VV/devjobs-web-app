import { useState } from "react";
import { JobList } from "./JobList";
import { useJob } from "./hooks/useJob";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import type { Job } from "../../types/Job";

const FULL_TIME = "Full Time";

const filterJobs = (
  jobs: Job[],
  location: string,
  query: string,
  fullTimeOnly: boolean
) => {
  let filtered = jobs;

  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.position.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q)
    );
  }

  if (location.trim()) {
    const loc = location.toLowerCase();
    filtered = filtered.filter((job) =>
      job.location.toLowerCase().includes(loc)
    );
  }

  if (fullTimeOnly) {
    filtered = filtered.filter((job) => job.contract === FULL_TIME);
  }

  return filtered;
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
        <JobList jobs={filterJobs(jobs, location, query, isFullTime)} />
      </div>
    </section>
  );
};
