import axios from "axios";

const api = axios.create({
  baseURL: "https://mood-diary-g3gd.onrender.com/api",
});

export default api;
