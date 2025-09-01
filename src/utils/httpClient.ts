const BASE_URL = "/api/data.json";

export function getData() {
  const res = fetch(BASE_URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));

  return res;
}
