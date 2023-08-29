<template>
  <div class="">
    <input v-model="user" type="text" />
    <input v-model="pass" type="password" />
    <button @click="login">Login</button>

    <div class="">test: <button @click="test">test</button></div>
    <div class="">user: <button @click="whoami">whoami</button></div>
    <div class=""><button @click="logout">Logout</button></div>
    <div class="">
      {{ message }}
    </div>
  </div>
</template>
<script>
import api from "../api/api.js";
export default {
  data() {
    return {
      user: "test@test.com",
      pass: "asdf",
      message: "",
    };
  },
  mounted: function () {},
  methods: {
    login: function () {
      // get token
      api()
        .post("login", {
          email: this.user,
          password: this.pass,
          device_name: "browser",
        })
        .then((response) => {
          const token = response.data.token;
          console.log("Token from Response:", token);
          // eslint-disable-next-line no-undef
          repository.setToken(token); // Store token using the updated method
          console.log(
            "Token Stored in Local Storage:",
            // eslint-disable-next-line no-undef
            repository.getStoredToken()
          );
        });
    },
    logout: function () {
      // revoke token
      api()
        .post("logout")
        .then((response) => {
          localStorage.removeItem("token");
          console.log(response.data);
        });
    },
    whoami: function () {
      // test if backend auth is working
      api()
        .get("whoami")
        .then((response) => console.log((this.message = response.data)))
        .catch((error) => {
          if (error.response) this.message = error.response.data.message;
          throw error;
        });
    },
    test: function () {
      // this is an unauthenticated route, should always work
      this.message = "";
      api()
        .get("test")
        .then((response) => console.log((this.message = response.data)));
    },
  },
};
</script>
<style></style>
