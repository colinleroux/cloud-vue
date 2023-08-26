import api from "./api";

const backendUrl = "https://apivue.com";

export default {
  createSession() {
    return api.get(`${backendUrl}/sanctum/csrf-cookie`);
  },

  login(params) {
    const email = params.email;
    const password = params.password;
    return api.post(`${backendUrl}/api/auth/login`, {
      email,
      password,
    });
  },

  register(params) {
    const name = params.name;
    const email = params.email;
    const password = params.password;
    const password_confirmation = params.password_confirmation;
    return api.post(`${backendUrl}/api/auth/register`, {
      name,
      email,
      password,
      password_confirmation,
    });
  },

  logout() {
    return api.post(`${backendUrl}/api/auth/logout`);
  },
  getProducts() {
    return api.get(`${backendUrl}/api/v1/products`);
  },
  getProduct(id) {
    return api.get(`${backendUrl}/api/v1/products/` + id);
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
  sendVerificationEmail() {
    return api.post(`${backendUrl}/auth/send-verification-email`);
  },
};
