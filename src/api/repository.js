import api from "./api";

const baseUrl = "https://phplaravel-1087149-3834893.cloudwaysapps.com";

export default {
  createSession() {
    return api.get(`${baseUrl}/sanctum/csrf-cookie`);
  },

  async login(params) {
    const { email, password } = params;
    const response = await api.post(`${baseUrl}/api/login`, {
      email,
      password,
    });
    return response.data;
  },

  register(params) {
    const name = params.name;
    const email = params.email;
    const password = params.password;
    const confirm_password = params.password_confirmation;
    return api.post(`${baseUrl}/api/register`, {
      name,
      email,
      password,
      confirm_password,
    });
  },

  logout() {
    return api.post(`${baseUrl}/api/logout`);
  },
  getRecipes() {
    return api.get(`${baseUrl}/api/v1/recipes`);
  },
  getRecipe(id) {
    return api.get(`${baseUrl}/api/v1/recipes/` + id);
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
