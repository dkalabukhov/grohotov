<template>
  <div class="wrapper" @click="$store.commit('switchOrderModal')">
    <div @click.stop class="wrapper__modal">
      <h1 class="wrapper__heading">Заказ успешно оформлен</h1>
      <button class="wrapper__btn" @click="$store.commit('switchOrderModal')">Закрыть</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModalSuccess"
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    background: rgb(59,59,59, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    &__modal {
      display: flex;
      flex-direction: column;
      padding: 40px;
      width: 600px;
      background-color: #fff;
      justify-content: center;
      align-items: center;
    }
    &__heading {
      font-size: 36px;
      margin-bottom: 40px;
    }
    &__btn {
      padding: 15px 40px;
      background: none;
      border: 1px solid rgb(31, 34, 31);
      cursor: pointer;
    }
  }
</style>