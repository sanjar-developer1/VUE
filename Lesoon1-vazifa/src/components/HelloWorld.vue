<template>
  <header>
    <nav>
      <h1>Kristal</h1>
      <div class="catalog">Каталог</div>
      <ul>
        <li>Оптовые продажи</li>
        <li>Продажи в рознице</li>
        <li>Контакты</li>
        <li>Вакансии</li>
        <li>Отзывы</li>
      </ul>
      <div class="user"><i class="fa-solid fa-user"></i> Личный кабинет</div>
    </nav>
    <div class="hero">
      <h1>Продажи в рознице</h1>
      <div class="product-wrapper">
        <div class="product" v-for="(e, index) in products" :key="index">
          <img
            src="https://picsum.photos/id/37/200/300"
            alt="bu yerda rasm bor"
            width="562px"
            height="206px"
          />
          <div class="product-info">
            <div>
              <div class="divv">
                <p class="kollaj">Коллаж</p>
                <p>Амурская улица, 22А</p>
              </div>
              Пн - Пт 9:00 - 19:00
            </div>
            <p class="p">Забронировать продукцию</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      products: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  column-gap: 40px;
  background-color: #ffffff;
}
.p {
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #a16341;
  border: 1px solid #a16341;
  border-radius: 45px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  text-decoration: none;
  list-style: none;
}
.divv {
  display: flex;
  gap: 10px;
  align-self: start;
  justify-content: center;
}
.catalog {
  width: 127px;
  height: 45px;
  background-color: #be612f;
  border-radius: 45px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user {
  width: 186px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  border-radius: 45px;
  border: 1px solid #000;
}
.kollaj {
  font-family: Playfair Display;
  font-weight: 800;
  font-style: ExtraBold;
  font-size: 22px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 56px 120px;
  background-color: #f8f8f8;
}
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.product {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 562px;
  display: flex;
  align-self: start;
  justify-content: space-between;
}
.product img {
  border-radius: 8px;
}
.product-info {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}
p {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 125%;
  letter-spacing: 0%;
}
</style>
