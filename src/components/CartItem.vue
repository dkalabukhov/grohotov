<template>
    <div class="product-card">
    <img v-bind:src="product.imgLink" class="product-card__img" alt="Продукт" srcset="">
    <div class="product-card__info">
      <span class="product-card__heading">
        {{ product.heading }}
      </span>
      <span class="product-card__description">
        {{ product.description }}
      </span>
      <span class="product-card__vendor-code">
        Артикул: {{ product.vendorCode }}
      </span>
    </div>
      <div class="product-card__controls-wrapper">
        <div class="product-card__controls">
          <button class="product-card__btn btn_remove-amount" @click="$store.commit('decreaseAmount', product.id)">
            <img src="../assets/img/horizontal_line.svg" alt="Удалить" srcset="">
          </button>
          <span class="product-card__goods-amount"> {{ product.goodsAmount }}</span>
          <button class="product-card__btn add-amount" @click="$store.commit('addAmount', product.id)">
            <img src="../assets/img/vertical_line.svg" alt="Добавить" srcset="">
            <img src="../assets/img/horizontal_line.svg" alt="Добавить" srcset="">
          </button>
        </div>
        <div class="product-card__price-per-one" v-show="product.goodsAmount > 1">{{ formatPrice(product.price) }}₽/шт.</div>
      </div>

    <div class="product-card__price-wrapper">
      <span class="product-card__total-price">{{ formatPrice(product.goodsAmount * product.price) }} ₽</span>
    </div>

    <div class="product-card__remove-item">
      <button class="product-card__remove-btn" @click="$store.commit('deleteCartItem', product.id)">
        <img src="../assets/img/left_cross.svg" alt="Удалить товар">
        <img src="../assets/img/right_cross.svg" alt="Удалить товар">
      </button>
    </div>
  </div>

</template>

<script>
  import formatPrice from '@/utils/formatPrice.js'
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    methods: {
      formatPrice
    },
  }
</script>

<style scoped lang="scss">

.product-card {
  display: flex;
  padding-left: 20px;
  border-bottom: 1px solid #C4C4C4;

  &__info {
    margin-left: 31px;
    width: 263px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  &__heading {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 6px;
  }
  &__description {
    color:#2C3242;
    font-size: 12px;
    margin-bottom: 7px;
    line-height: 17.4px;
  }
  &__vendor-code {
    color: #797B86;
  }

  &__controls-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 79px;
    position: relative;
  }

  &__controls {
    display: flex;
    align-self: center;
    padding-top: 20px;;
    margin-bottom: 15px;
  }
  &__btn {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: #F6F8FA;
    cursor: pointer;
    border: none;
    position: relative;
  }

  &__goods-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: #F6F8FA;
    border: none;
    margin: 0 2px;
  }

  &__btn:hover {
    background-color: #98989c;
  }

  &__btn > img {
    position: absolute;
  }


  &__price-per-one {
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  }

  &__goods-amount {
    cursor: auto;
  }

  &__price-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 84px;
  }

  &__total-price {
    font-weight: 500;
    font-size: 18px;
    font-family: Roboto, sans-serif;
  }

  &__remove-item {
    margin-left: auto;
    display: flex;
    align-items: flex-start;
  }

  &__remove-btn {
    right: 7px;
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
  }

  &__remove-btn > img {
    position: absolute;
    width: 12px;
    height: 12px;
  }
}

.product-card:nth-child(3) {
  border: none;
}
</style>