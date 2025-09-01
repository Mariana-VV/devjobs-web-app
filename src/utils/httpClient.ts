const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? `http://${import.meta.env.VITE_BASE_URL}/devjobs-web-app/api/data.json`
    : "/api/data.json";

export function getData() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
    "Access-Control-Allow-Credentials": "true",
  };

  const res = fetch(BASE_URL, {
    // mode: "no-cors",
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
    });

  return res;
}
