<template>
  <div class="your-cart">
    <h1 class="your-cart__heading">Ваша корзина</h1>
    <span class="your-cart__supplies-count">{{
      $tc('goods', $store.getters.countProducts)
    }}</span>
    <span
      v-if="$store.getters.countProducts > 0"
      class="your-cart__clear-items"
      @click="$store.commit('cleanCart')"
      >Очистить корзину</span
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.your-cart {
  display: flex;
  align-items: baseline;
  margin-bottom: 50px;
  &__heading {
    font-weight: 700;
    font-size: 44px;
    margin-right: 22px;
  }
  &__supplies-count {
    font-size: 18px;
    color: #797b86;
  }
  &__clear-items {
    color: #797b86;
    margin-left: auto;
    border-bottom: 1px solid #797b86;
    cursor: pointer;
  }

  &__clear-items:hover {
    color: #3d3d42;
  }
}
</style>
