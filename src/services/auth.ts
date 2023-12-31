import { authRoute } from "../api/authRoutes";

/**
 * Checks if the user is logged in.
 *
 * @return {boolean} - True if the user is logged in, false otherwise.
 */
export const isLogged = () => {
  const response = localStorage.getItem("sign");

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
    localStorage.removeItem("access_token");
    localStorage.removeItem("sign");
  }
};

/**
 * Sets the access token and user sign in the local storage.
 *
 * @param {string} token - The access token.
 * @param {object} user - The user object containing email and name.
 */
export const login = async (token: string, user: { email: string; name: string }) => {
  localStorage.setItem("access_token", token);
  localStorage.setItem("sign", JSON.stringify(user));
};

/**
 * Logs the user out by removing the access token and sign from local storage,
 * and redirecting them to the login page.
 *
 * @return {void}
 */
export const logout = () => {
  authRoute.logout();

  localStorage.removeItem("access_token");
  localStorage.removeItem("sign");

  window.location.href = "/login";
};
