<template>
    <div
      class="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto my-8"
    >
      <div class="p-4">
        <h1 class="text-lg font-semibold">{{ recipe.name }}</h1>
        <p class="text-gray-700 text-sm">desc{{ recipe.description }}</p>
                
        <br />
        <router-link :to="'/recipes'">Back</router-link>
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
  import repository from "@/api/repository";
  import { data } from "autoprefixer";
  
  export default {
    name: "RecipeView",
    computed: {
      data() {
        return data;
      },
    },
    data() {
      return {
        recipe: {},
      };
    },
  
    mounted() {
      this.getRecipe();
    },
    methods: {
      getProduct() {
        repository.getRecipe(this.$route.params.id).then((response) => {
          console.log(response.data);
          this.recipe = response.data.data;
        });
      },
    },
  };
  </script>
  <script setup></script>
  