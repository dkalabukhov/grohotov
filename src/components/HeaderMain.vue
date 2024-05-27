<script>
  import formatPrice from '@/utils/formatPrice';
  export default {
    methods: {
      formatPrice
    }
  }
</script>

<template>
  <header>
    <div class="header">
      <img class="header__img" src="../assets/img/basket.svg" alt="Корзина">
      <div class="header__subheader">
        <h3 class="header__heading">Ваша корзина</h3>
        <span class="header__supplies-count"> {{ $tc('goods', $store.getters.countProducts) }}</span>
        <span class="header__sum-count">{{ formatPrice($store.getters.countTotalPrice) }} ₽</span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

header {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 95px;
}
.header {
  display: flex;
  align-items: center;

  &__subheader {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  &__heading {
    line-height: 21px;
  }
  &__img {
    width: 32px;
    height: 32px;
  }
  &__supplies-count {
    color: #797B86;
    font-size: 12px;
    line-height: 17.4px;
  }
  &__sum-count {
    font-size: 12px;
  }
}
</style>