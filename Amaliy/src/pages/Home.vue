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
        <router-link to="/abut">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="nav-right">
      <i
        class="fa-solid fa-user"
        style="width: 20px; color: black; height: 20px; font-size: 20px"
      ></i>
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
  justify-content: space-evenly;
  border: 2px solid;
}
.nav-ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
