<template>
  <div class="installation">
    <input
      type="checkbox"
      class="installation__checkbox"
      name="installation"
      id="installation"
      @change="$store.commit('pickInstallation')"
    />
    <img
      src="../assets/img/installation.svg"
      class="installation__img"
      alt=""
      srcset=""
    />
    <div class="installation__text">
      <h3 class="installation__heading">Установка</h3>
      <span class="installation__description">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.installation {
  background-color: #f6f8fa;
  display: flex;
  height: 102px;
  align-items: center;
  padding-left: 25px;
  border-radius: 10px;
  margin-bottom: 95px;

  &__checkbox {
    width: 20px;
    height: 20px;
  }

  &__img {
    margin-left: 20px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  &__heading {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
    line-height: 23.2px;
  }
  &__description {
    color: #797b86;
  }
}
</style>
