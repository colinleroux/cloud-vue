import axios from "axios";

let instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json";
  request.headers.common["Content-Type"] = "application/json";

  const token = localStorage.getItem("token");
  console.log("Token from Local Storage:", token); // Add this line
  if (token) {
    request.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

export default instance;
