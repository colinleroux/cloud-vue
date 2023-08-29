import axios from "axios";

export default function () {
  let api = axios.create({
    baseURL: "https://phplaravel-1087149-3834893.cloudwaysapps.com/api",
  });

  let token = localStorage.getItem("token");
  console.log("Stored Token:", token); // Add this line for debugging
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("Authorization Header Set with Token:", token); // Add this line for debugging
  }
  return api;
}
