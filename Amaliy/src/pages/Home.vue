<template>
  <div class="home">
    <section class="banner">
      <Swiper />
    </section>

    <section class="categories">
      <div class="category-card">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Elektronika</p>
      </div>
      <div class="category-card">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Kiyim-kechak</p>
      </div>
      <div class="category-card">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Sport</p>
      </div>
      <div class="category-card">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Maishiy texnika</p>
      </div>
      <div class="category-card">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Maishiy texnika</p>
      </div>
    </section>
  </div>
  <Products />
</template>

<script>
import Swiper from "../components/Swiper.vue";
import Products from "./Products.vue";
export default {
  name: "HomePage",
  components: { Swiper, Products },
};
</script>

<style>
.home {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.cta-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #6a1b9a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.categories {
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
}
.category-card {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
}
.category-card img {
  border-radius: 8px;
  margin-bottom: 8px;
}
.popular {
  margin-top: 40px;
}
.advantages {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}
.advantage {
  font-size: 16px;
  font-weight: bold;
}
</style>
