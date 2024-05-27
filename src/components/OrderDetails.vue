<template>
<aside class="order">
  <h3 class="order__heading">Итого</h3>
  <p class="order__details">
    <span>Сумма заказа</span>
    <span class="order_details_sum-count">{{ formatPrice($store.getters.countTotalPrice) }} ₽</span>
  </p>
  <p class="order__details">
    <span>Количество</span>
    <span class="order_details_supplies-count">{{ $store.getters.countProducts }} шт</span>
  </p>
  <p class="order__details">
    <span>Установка</span>
    <span class="order_details_installation" v-if="$store.state.installation">Да</span>
    <span class="order_details_installation" v-else>Нет</span>
  </p>
  <hr class="order__breaking-line">
  <p class="order__cost">
    <span>Стоимость товаров</span>
    <span class="order__goods-price">{{ formatPrice($store.getters.countTotalPrice) }} ₽</span>
  </p>
  <BtnPrimary v-if="$store.getters.countProducts > 0" @click="$store.dispatch('sendCart')" class="order__btn">Оформить заказ</BtnPrimary>
  <BtnSecondary v-if="$store.getters.countProducts > 0" class="order__btn">Купить в 1 клик</BtnSecondary>
</aside>
</template>

<script>
import formatPrice from '@/utils/formatPrice';

  export default {
    methods: {
      formatPrice
    }
  }
</script>

<style scoped lang="scss">
.order {
  background-color: #F6F8FA;
  padding: 35px 30px;
  width: 425px;
  height: 458px;
  margin-top: -15px;

  &__heading {
    font-size: 24px;
    margin-bottom: 31px;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 23.2px;
  }

  &__details + &__details {
    margin-top: 17px;
  }

  &__details:nth-child(4) {
    margin-bottom: 28px;
  }

  &__breaking-line {
    border: 1px solid #AEB0B6;
  }
  &__cost {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 30px;
  }

  &__goods-price {
  font-weight: 700;
  font-size: 26px;
  font-family: Roboto, sans-serif;
  }

  &__btn + &__btn {
  margin-top: 12px;
}
}
</style>