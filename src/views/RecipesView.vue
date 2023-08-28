<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="product in data.data" :key="product.id">
      <router-link :to="'/products/' + product.id">
        <div class="bg-white p-4 shadow rounded-lg">
          <h1 class="text-lg font-medium">{{ product.name }}</h1>
          <p class="text-gray-500">{{ product.description }}</p>
          <p class="text-gray-900 font-bold">${{ product.price }}</p>
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
import repository from "@/api/repository";

export default {
  name: "ProductsView",
  components: {},

  data() {
    return {
      data: [],
    };
  },

  mounted() {
    repository.getProducts().then((response) => {
      console.log(response.data);
      this.data = response.data;
    });
  },
};
</script>
