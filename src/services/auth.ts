// veirifica se o usuário está logado
export const isLogged = () => {
  const response = localStorage.getItem("sign");

  return !(response === null || response === undefined || response === "");
};

export const validateToken = async (token: string | number) => {
  if (token === "unauthorized" || token === 401) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("sign");
  }
};

export const login = async (token: string, user: { email: string; name: string }) => {
  localStorage.setItem("access_token", token);
  localStorage.setItem("sign", JSON.stringify(user));
};
