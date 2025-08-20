<template>
  <nav>
    <!-- Logo -->
    <router-link to="/" class="text-lg font-bold text-blue-600">
      MyShop
    </router-link>

    <!-- Menu -->
    <ul class="nav-ul">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="icons">
      <router-link class="icon-item" to="/login">
        <i class="fa-regular fa-user"></i>
        <span>Kirish</span>
      </router-link>
      <router-link class="icon-item">
        <i class="fa-regular fa-heart"></i>
        <span>Saralanganlar</span>
      </router-link>
      <router-link class="icon-item" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Savat</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border: 2px solid grey;
  height: 80px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}

.icon-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
  gap: 5px;
}

.icon-item i {
  font-size: 22px;
  margin-bottom: 5px;
}

.icon-item:hover {
  color: #6a1b9a;
}
</style>
