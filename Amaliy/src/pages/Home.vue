<template>
  <nav class="bg-white border-b shadow-sm">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-lg font-bold text-blue-600">
        MyShop
      </router-link>

      <!-- Menu -->
      <ul class="flex items-center gap-6">
        <li>
          <router-link to="/" class="hover:text-blue-600">Home</router-link>
        </li>
        <li>
          <router-link to="/abut" class="hover:text-blue-600"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="hover:text-blue-600"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
