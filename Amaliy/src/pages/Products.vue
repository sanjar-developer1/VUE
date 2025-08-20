<template>
  <section class="popular">
    <h2>Ommabop mahsulotlar</h2>
    <div class="product-list">
      <div v-for="(product, index) in products" class="product-card" :key="index">
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title.slice(0, 20) }}</h3>
        <p>{{ product.price }}$</p>
        <button>Savatga qo‘shish</button>
      </div>
    </div>
  </section>
</template>
<script>
import api from "../utils/axios";
export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      const res = await api.get("/products");
      this.products = res.data;
    } catch (error) {
      console.error("Xatolik", error)
    }
  }

}
</script>
<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 12px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.product-card img {
  width: 200px;
  height: 300px;
  border-radius: 8px;
}

.product-card button {
  background-color: #6a1b9a;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
