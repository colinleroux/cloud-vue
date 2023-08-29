<template>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="recipe in data" :key="recipe.id">
        <router-link :to="'/recipes/' + recipe.id">
          <div class="bg-white p-4 shadow rounded-lg">
            <h1 class="text-lg font-medium">{{ recipe.title }}</h1>
            <div v-if="recipe.recipe_pictures.length > 0">
              <img :src="recipe.recipe_pictures[0].filename" alt="Recipe Image" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .product-name {
    font-size: 18px;
  }
  </style>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    name: "RecipesView",
    components: {},
  
    data() {
      return {
        data: [],
      };
    },
  
    mounted() {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Set Authorization header

    axios.get("https://phplaravel-1087149-3834893.cloudwaysapps.com/api/v1/recipes")
      .then(response => {
        console.log(response.data);
        this.data = response.data.data; // Access the 'data' array from the response
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
  },
};
  </script>
  