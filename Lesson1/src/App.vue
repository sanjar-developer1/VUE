<template>
  <HelloIkkinchiVue title="Salom ikkinchi vue" :products="abubakrArray" />
</template>

<script>
import HelloIkkinchiVue from "./components/HelloIkkinchi.vue";

export default {
  components: {
    HelloIkkinchiVue,
  },
  data() {
    return {
      abubakrArray: [],
    };
  },
  methods: {
    async getAllProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((abubakr) => {
          console.log(abubakr);
          this.abubakrArray = abubakr;
        });
    },
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style></style>
