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
import repository from "@/api/repository"; // Import the repository
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
    async login() {
      try {
        const token = await repository.login(this.user);
        console.log("Token from Response:", token);
        repository.setToken(token);
        console.log(
          "Token Stored in Local Storage:",
          repository.getStoredToken()
        );
        this.reloadPage();
        this.errorMessage = null;
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          this.errorMessage = "Email not verified.";
        } else {
          this.errorMessage = "Login failed.";
        }
      }
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<style></style>
