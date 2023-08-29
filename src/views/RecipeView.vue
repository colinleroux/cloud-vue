<template>
    <div
      class="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto my-8"
    >
      <div class="p-4">
        <h1 class="text-lg font-semibold">{{ product.name }}</h1>
        <p class="text-gray-700 text-sm">desc{{ product.description }}</p>
        <p class="text-lg font-semibold text-gray-900">${{ product.price }}</p>
        <ul>
          <p class="text-md font-semibold text-gray-900">Categories</p>
          <li v-for="category in product.categories" :key="category.id">
            {{ category.attributes.name }}
          </li>
        </ul>
        <br />
        <router-link :to="'/products'">Back</router-link>
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
    name: "ProductView",
    computed: {
      data() {
        return data;
      },
    },
    data() {
      return {
        product: {},
      };
    },
  
    mounted() {
      this.getProduct();
    },
    methods: {
      getProduct() {
        repository.getProduct(this.$route.params.id).then((response) => {
          console.log(response.data);
          this.product = response.data.data;
        });
      },
    },
  };
  </script>
  <script setup></script>
  