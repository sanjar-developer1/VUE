<script>
export default {
  data() {
    return {
      searchItem: "",
      items: ["Apple", "Banana", "Grapes", "Pineapple"],
      filteredItems: [],
    };
  },
  // Boshqa reactive (data) qiymatlarga bog'liq bo'lgan qiymatni avtomatik hisoblash.
  // Keshlanadi - ya'ni agar bo'glangan qiymalarni o'zgarmasa, qayta hisoblamaydi.

  computed: {
    filteredList() {
      return this.items.filter((item) =>
        item.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    },
  },

  // Muayyan data yoki computed qiymatlar o'zgarganini kuzatib,unga javoban funksiyani ishga tushuradi.
  // Watch yon effekt (side-effekt) kerak bo'lgan holatlarni ishlatiladi, masalan:API chaqirish,malumotni saqlash, biz uni useEffekt ga o'xshatib ishlatamiz

  watch: {
    searchItem(newValue) {
      this.filteredItems = this.items.filter((item) =>
        item.toLowerCase().includes(newValue.toLowerCase())
      );
    },
  },
};
</script>

<template>
  <input type="text" v-model="searchItem" placeholder="Salom" />
  <ul>
    <li v-for="item in filteredList" :key="item">{{ item }}</li>
  </ul>
</template>

<style></style>
