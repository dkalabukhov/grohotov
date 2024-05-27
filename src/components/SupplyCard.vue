<template>
  <div>
    <div class="supply-card">
          <div>
            <img v-bind:src="supply.img" class="supply-card__img" alt="Товар" srcset="">
            <h3 class="supply-card__heading"> {{ supply.heading }}</h3>
            <p class="supply-card__description"> {{ supply.description }}</p>
          </div>
          <div>
            <h3 class="supply-card__rub-price">{{ supply.rubPrice }}</h3>
            <span class="supply-card__eur-price">{{  supply.eurPrice }}</span>
            <BtnPrimarySmallerText class="margin-top">Подробнее</BtnPrimarySmallerText>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    props: {
      supply: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
.supply-card {
  background-color: #F6F8FA;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 25px;
  width: 305px;
  height: 563px;
  margin-right: 20px;
  border-radius: 10px;

  &__img {
    width: 245px;
    height: 245px;
}
  &__heading {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 10px;
}

  &__description {
    line-height: 20.3px;
  }
  &__rub-price {
    font-weight: 500;
    font-family: Roboto, sans-serif;
    font-size: 22px;
    line-height: 28.6px;
}
  &__eur-price {
    color: #797B86;
    font-size: 16px;
    line-height: 23.2px;
  }
}

.margin-top {
  margin-top: 20px;
}
</style>