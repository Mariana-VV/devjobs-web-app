const BASE_URL =
  import.meta.env.VITE_MODE === "development"
    ? import.meta.env.VITE_BASE_URL
    : `${import.meta.env.VITE_PROJECT_NAME}${import.meta.env.VITE_BASE_URL}`;

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
