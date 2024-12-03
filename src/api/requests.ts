import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

const parseURL = (url: string | string[]): string => {
  if (Array.isArray(url)) {
    return url.join("/").replace(/\/+/g, "/");
  }
  return url.replace(/\/+/g, "/");
};

const handleResponseError = (error: unknown): Promise<never> => {
  if (axios.isAxiosError(error)) {
    return Promise.reject(error.response?.data || "Server Error");
  }
  return Promise.reject("Unexpected Error");
};

const returnData = (response: AxiosResponse) => response.data;

export const get = (url: string | string[], config?: AxiosRequestConfig) =>
  instance
    .get(parseURL(url), config)
    .then(returnData)
    .catch(handleResponseError);

export default instance;
