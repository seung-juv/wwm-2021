import axios, { AxiosInstance } from "axios";

function getApiHost(): string {
  return "https://server.seung-ju.com";
}

export const restApi: AxiosInstance = axios.create({
  baseURL: getApiHost(),
});
