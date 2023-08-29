<template>
  <div class="">
    <input v-model="user" type="text" />
    <input v-model="pass" type="password" />
    <button @click="login">Login</button>

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
      user: "monique11@test.com",
      pass: "12341234",
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
        .then((r) => {
          console.log("from login method", JSON.stringify(r.data.token));
          localStorage.setItem("token", JSON.stringify(r.data));
        });
    },
    logout: function () {
      // revoke token
      const token = localStorage.getItem("token");
      api()
        .post(
          "v1/logout",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((r) => {
          localStorage.removeItem("token");
          console.log("from logout", r.data);
        })
        .catch((error) => {
          console.error("Logout Error:", error);
        });
    },
  },
};
</script>
<style></style>
