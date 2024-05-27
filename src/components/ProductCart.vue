<template>
  <CartItem
    :product="product"
    v-for="product in products"
    :key="product.id"
    class="product-item" />
</template>

<script>
  import CartItem from '@/components/CartItem.vue';
  export default {
    components: {
    CartItem
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  }
</script>

<style lang="scss" scoped>
.product-item {
  padding-bottom: 23px;
  margin-bottom: 23px;
  width: 800px;
}
</style>