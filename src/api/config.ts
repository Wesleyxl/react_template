import axios from "axios";

import { BASE_URL } from "../env";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeoutErrorMessage: "Request timed out",
  timeout: 10000,
});
