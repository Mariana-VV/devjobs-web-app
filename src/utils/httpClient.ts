const BASE_URL = "http://localhost:5173/devjobs-web-app/public/api/data.json";

export function getData() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
  };

  return fetch(BASE_URL, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
