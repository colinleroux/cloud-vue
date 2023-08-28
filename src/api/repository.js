import api from "./api";

const backendUrl = "https://phplaravel-1087149-3834893.cloudwaysapps.com";

export default {
  createSession() {
    return api.get(`${backendUrl}/sanctum/csrf-cookie`);
  },

  login(params) {
    const email = params.email;
    const password = params.password;
    return api.post(`${backendUrl}/api/login`, {
      email,
      password,
    });
  },

  register(params) {
    const name = params.name;
    const email = params.email;
    const password = params.password;
    const confirm_password = params.password_confirmation;
    return api.post(`${backendUrl}/api/register`, {
      name,
      email,
      password,
      confirm_password,
    });
  },

  logout() {
    return api.post(`${backendUrl}/api/auth/logout`);
  },
  getRecipes() {
    return api.get(`${backendUrl}/api/v1/recipes`);
  },
  getRecipe(id) {
    return api.get(`${backendUrl}/api/v1/recipes/` + id);
  },
  setToken(token) {
    localStorage.setItem("token", token);
  },

  removeToken() {
    localStorage.removeItem("token");
  },

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  },
};
