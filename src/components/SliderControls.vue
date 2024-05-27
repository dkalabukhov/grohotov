<template>
  <div>
    <div class="controls">
    <h2 class="controls__heading">Просмотренные товары</h2>
    <div class="controls__slider-controls">
      <button class="controls__btn slider-move-left" @click="$emit('prevSlide')">
        <img src="../assets/img/left_arrow.svg" class="slider_arrow" alt="Назад" srcset="">
      </button>
      <p>
        <span class="controls__page_bold-big">{{ $store.state.slidePosition }}</span><span class="controls__page_small"> / 6</span>
      </p>
      <button class="controls__btn slider-move-right" @click="$emit('nextSlide')">
        <img src="../assets/img/right_arrow.svg" class="slider_arrow" alt="Назад" srcset="">
      </button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
.controls {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &__slider-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  }

  &__heading {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }

  &__btn {
    border: none;
    cursor: pointer;
  }

  &__btn > img {
  width: 8px;
  height: 18px;
  }

  &__page_bold-big {
    font-size: 24px;
    margin-left: 12px;
    font-weight: 600;
  }

  &__page_small {
    color: #797B86;
    font-size: 18px;
    margin-right: 12px;
  }
}

.slider-move-left,
.slider-move-right {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/ellipse.png') center center no-repeat;
  padding: 30px;
}
</style>