import axios from "axios";

import { BASE_URL } from "../env";
import { validateToken, securels } from "../services/auth";

// const ls = new SecureLS({ encodingType: "aes" });

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

    return "Error";
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
    return "Error";
  }
};

export const apiFetchGet = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${securels.get("access_token")}`,
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    await validateToken(response.status);

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;
    return "Error";
  }
};

export const apiFetchPost = async (endpoint: string, body: any = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${securels.get("access_token")}`,
      },
      timeoutErrorMessage: "Request timed out",
      timeout: 10000,
    });

    await validateToken(response.status);

    return response.data;
  } catch (error: any) {
    // console.error("Erro na requisição:", error);
    // throw error;
    return "Error";
  }
};
