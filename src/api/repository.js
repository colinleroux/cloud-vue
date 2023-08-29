import api from "./api";

const baseUrl = "https://phplaravel-1087149-3834893.cloudwaysapps.com";

export default {
  login(params) {
    const { email, password } = params;
    return api.post("/login", { email, password }).then((response) => {
      const token = response.data.token;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Set token in headers
      return token;
    });
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
    return api.post(`${baseUrl}/api/logout`).then(() => {
      api.defaults.headers.common["Authorization"] = null; // Remove token from headers
      localStorage.removeItem("token"); // Remove token from localStorage
    });
  },
  getRecipes() {
    return api.get(`${baseUrl}/api/v1/recipes`);
  },
  getRecipe(id) {
    return api.get(`${baseUrl}/api/v1/recipes/` + id);
  },
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  },
};
