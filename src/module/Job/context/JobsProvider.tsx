import React, { useState, useEffect } from "react";
import { JobContext } from "./JobContext";
import type { Job } from "../../../types/Job";
import { getJobs } from "../utils/httpClient";

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs));
  }, []);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};
