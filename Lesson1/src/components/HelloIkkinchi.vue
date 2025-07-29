<template>
  <div v-for="(data, index) in products" :key="index">
    <img
      :src="data.image"
      width="300"
      height="300"
      :aria-label="data.title"
      :alt="data.title"
    />
    <h1>{{ data.title.slice(0, 10) }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: { type: String, default: "bu yerda default holat", required: true },
    products: { typeof: Array, default: [] },
  },
  mounted() {},
  methods: {},
  watch() {},
  computed() {},
};
</script>

<style></style>

<!--  -->
