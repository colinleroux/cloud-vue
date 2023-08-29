<template>
  <nav>
    <div
      v-if="!isAuthenticated"
      class="font-bold text-white flex items-center space-x-5 flex-wrap bg-blue-500 p-6"
    >
      <router-link class="hover:bg-green-500 rounded px-2 py-1" to="/"
        >Login</router-link
      >
      <router-link class="hover:bg-green-500 rounded px-2 py-1" to="/register"
        >Register</router-link
      >
    </div>
    <div
      v-else
      class="font-bold text-white flex justify-between items-center flex-wrap bg-blue-500 p-6"
    >
      <div class="flex space-x-5 items-center">
        <router-link class="hover:bg-green-500 rounded px-2 py-1" to="/recipes"
          >Recipes</router-link
        >
      </div>
      <button
        class="hover:bg-green-500 rounded px-2 py-1 justify-right"
        @click="logout"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import repository from "@/api/repository";

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },

  mounted() {
    this.isAuthenticated = repository.isAuthenticated();
  },

  methods: {
    logout() {
      console.log("Logout button clicked");
      repository.logout(); // Call the logout method from the repository
      console.log("Logout successful");
      this.$router.push("/"); // Redirect to the home page or another appropriate route
    },
  },
};
</script>

<style></style>
