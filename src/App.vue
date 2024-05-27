<script>
import ProductCart from '@/components/ProductCart.vue';
import ViewedGoods from '@/components/ViewedGoods.vue';
import HeaderMain from '@/components/HeaderMain.vue';
import NavMain from '@/components/NavMain.vue';
import OrderDetails from '@/components/OrderDetails.vue';
import YourCart from '@/components/YourCart.vue';
import InstallationOption from './components/InstallationOption.vue';
export default {
  components: {
    ProductCart,
    ViewedGoods,
    HeaderMain,
    NavMain,
    OrderDetails,
    YourCart,
    InstallationOption
  },
};
</script>

<template>
  <div class="app">
    <HeaderMain />
    <NavMain />
    <main>
      <YourCart class="your-cart" />
      <div class="cart-container" v-if="$store.state.products.length > 0">
          <div>
            <ProductCart :products="$store.state.products" />
            <InstallationOption  />
          </div>
          <OrderDetails />
      </div>
      <ViewedGoods />
    </main>
    <footer></footer>
    <ModalSuccess v-if="$store.state.orderModal" />
  </div>
</template>

<style scoped lang="scss">
.app {
  padding: 0 80px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  position: relative;
  max-width: 1440px;
}
.cart-container {
  display: flex;
  flex-direction: row;
  gap: 55px;
}
.your-cart {
  width: 800px;
}

footer {
  margin-top: 116px;
}
</style>
