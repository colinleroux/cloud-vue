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
  import axios from 'axios'; // Import axios library
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
        const token = localStorage.getItem("token"); // Get token from local storage
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Set Authorization header
      axios.post("https://phplaravel-1087149-3834893.cloudwaysapps.com/api/logout")
        .then(response => {
          console.log("Logout successful:", response.data);
          localStorage.removeItem("token"); // Remove token from localStorage
          this.$router.push("/"); // Redirect to the home page or another appropriate route
        })
        .catch(error => {
          console.error("Logout failed:", error);
        });
    },
  },
};
</script>

Please make sure that the URL in axios.post matches the correct logout API endpoint.

By directly using axios within the component, you're bypassing the repository layer. This setup should work to log the user out and handle the necessary steps. Remember to adapt the code to your specific project structure and needs.

  
  <style></style>
  