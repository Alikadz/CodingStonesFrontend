import axios from "axios";

const token = localStorage.getItem("access_token")
export const api = axios.create({
  baseURL: "https://stg-coding-stones-api.zendev.se/",
  headers: {
    Authorization: `Bearer ${token}`
  }
});
