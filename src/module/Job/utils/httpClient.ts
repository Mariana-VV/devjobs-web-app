import axios from "axios";
import type { Job } from "../../../types/Job";

const client = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getJobs = async () => {
  return client
    .get<Job[]>("/api/data.json")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
