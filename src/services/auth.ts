import SecureLS from "secure-ls";

import { authRoute } from "../api/authRoutes";
export const securels = new SecureLS({ encodingType: "aes" });

/**
 * Checks if the user is logged in.
 *
 * @return {boolean} - True if the user is logged in, false otherwise.
 */
export const isLogged = () => {
  const response = securels.get("user");

  return !(response === null || response === undefined || response === "");
};

/**
 * Validates a token and performs actions if the token is unauthorized.
 *
 * @param {string | number} token - The token to validate.
 * @return {void} - Does not return a value.
 */
export const validateToken = async (token: string | number) => {
  const isUnauthorized = token === "unauthorized" || token === 401;
  if (isUnauthorized) {
    securels.remove("access_token");
    securels.remove("user");

    window.location.href = "/login";
  }
};

/**
 * Sets the access token and user data in local storage.
 *
 * @param {string} token - The access token.
 * @param {object} user - The user data containing email and name.
 */
export const login = async (token: string, user: { email: string; name: string }) => {
  securels.set("access_token", token);
  securels.set("user", user);
};

/**
 * Logs the user out by removing the access token and sign from local storage,
 * and redirecting them to the login page.
 *
 * @return {void}
 */
export const logout = async () => {
  await authRoute.logout();

  securels.remove("access_token");
  securels.remove("user");

  window.location.href = "/login";
};
