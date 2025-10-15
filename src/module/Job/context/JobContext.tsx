/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState, useContext, useEffect } from "react";

import type { Job } from "../../../types/Job";
import { getJobs } from "../utils/httpClient";

interface JobContextProps {
  jobs: Job[];
  setJobs: (data: Job[]) => void;
}

export const JobContext = createContext<JobContextProps>({
  jobs: [],
  setJobs: (_data: Job[]) => {},
});

export const useJob = () => useContext(JobContext);
export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs));
  }, []);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      <div>{children}</div>
    </JobContext.Provider>
  );
};
