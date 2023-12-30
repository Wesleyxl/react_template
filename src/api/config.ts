import axios from "axios";

import { BASE_URL } from "../env";
import { validateToken } from "../services/auth";

export const apiFetchPublicGet = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;

    return error.response.data;
  }
};

export const apiFetchPublicPost = async (endpoint: string, body: any = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;
    return error.response.data;
  }
};

export const apiFetchGet = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    await validateToken(response.status);

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;
    return error.response.data;
  }
};

export const apiFetchPost = async (endpoint: string, body: any = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    await validateToken(response.status);

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;
    return error.response.data;
  }
};
