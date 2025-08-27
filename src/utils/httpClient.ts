const BASE_URL = "http://localhost:5173/devjobs-web-app/public/api/data.json";

export function getData() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "http://localhost:5173/devjobs-web-app/public/api/data.json",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS,GET",
  };

  try {
    let res = null;

    res = fetch(BASE_URL, {
      mode: "no-cors",
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((e) => console.log(e));
    return res;
  } catch (e) {
    console.log(e);
  }
}
