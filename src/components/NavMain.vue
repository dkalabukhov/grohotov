<script setup>
</script>

<template>
  <nav>
    <p class="nav__subnav">
      <span class="subnav__root">Главная</span> <img src="../assets/img/arrow.svg" alt="Стрелка"> <span class="subnav__current">Корзина</span>
    </p>
  </nav>
</template>

<style scoped lang="scss">

nav {
  margin-bottom: 60px;
}
.subnav {
  &__root {
    color: #33374E;
    margin-right: 5px;
  }
  &__current {
    color: #797B86;
    margin-left: 5px;
  }
}
</style>