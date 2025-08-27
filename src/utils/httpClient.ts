const BASE_URL = "http://localhost:5173/public/api/data.json";

export function getData() {
  return fetch(BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
