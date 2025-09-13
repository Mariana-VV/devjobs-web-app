import type { Position } from "../types/Position";

const BASE_URL = `${import.meta.env.BASE_URL}`;

export function getData(): Promise<Position[]> {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
    "Access-Control-Allow-Credentials": "true",
  };

  const res = fetch(`${BASE_URL}/api/data.json`, {
    // mode: "no-cors",
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log(e);
    });

  return res;
}
