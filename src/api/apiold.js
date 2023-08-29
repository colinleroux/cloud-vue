import axios from "axios";

const instance = axios.create({
  baseURL: "https://phplaravel-1087149-3834893.cloudwaysapps.com/api",
});

export default instance;
