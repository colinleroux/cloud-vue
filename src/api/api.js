import axios from "axios";

const api = axios.create({
  baseURL: "https://phplaravel-1087149-3834893.cloudwaysapps.com/api",
});

const token = localStorage.getItem("token"); // Call the function to get the parsed token
console.log("Stored Token:", token);
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("Authorization Header Set with Token:", token);
}
export default api;
