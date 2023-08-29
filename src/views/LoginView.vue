<template>
    <div>
      <h1 class="text-3xl font-bold mt-5 mb-5 text-center">Login Page</h1>
  
      <div class="flex justify-center">
        <div class="w-full max-w-sm m-5">
          <div class="bg-white rounded-xl shadow-lg p-6 h-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 py-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="title"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  v-model="user.email"
                />
              </div>
  
              <div class="w-full px-3 py-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="title"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  v-model="user.password"
                  @keyup.enter="login"
                />
              </div>
  
              <div class="w-full px-3 py-2">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  @click="login"
                >
                  Login
                </button>
                <p class="text-red-500">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import api from "../api/api.js";
  export default {
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        errorMessage: "",
      };
    },
    methods: {
      login() {
        api()
          .post("login", {
            email: this.user.email,
            password: this.user.password,
            device_name: "browser",
          })
          .then((response) => {
            const token = response.data.data.token;
            localStorage.setItem("token", token);
            this.errorMessage = "";
            //this.reloadPage();
            this.$router.push("/recipes");
            // Redirect or perform other actions after successful login
          })
          .catch((error) => {
            if (error.response && error.response.status === 401) {
              this.errorMessage = "Email not verified.";
            } else {
              this.errorMessage = "Login failed.";
            }
          });
      },
    },
  };
  </script>
  