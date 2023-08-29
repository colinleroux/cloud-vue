import axios from "axios";

export default function () {
  let api = axios.create({
    baseURL: "https://phplaravel-1087149-3834893.cloudwaysapps.com/api",
  });

  let token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return api;
}
