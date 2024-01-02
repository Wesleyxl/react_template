import { apiFetchPost, apiFetchPublicPost } from "./config";

export const authRoute = {
  login: async (email: string, password: string) => {
    const response = await apiFetchPublicPost("/auth/login", { email, password });

    return response;
  },
  logout: async () => {
    const response = await apiFetchPost("/auth/logout");

    return response;
  },
};
