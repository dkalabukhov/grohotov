<script>
import SliderControls from './SliderControls.vue';
import SuppliesList from '@/components/SuppliesList.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ref } from 'vue';

import 'swiper/css';
import store from '@/store'

export default {
  components: {
    SliderControls,
    SuppliesList,
    Swiper,
    SwiperSlide,
  },
  methods: {
        Navigation() {
            return Navigation
        }
    },
  setup() {
      const swiperInstance = ref()

      function onSwiper(swiper) {
          swiperInstance.value = swiper
      }
      const swiperNextSlide = () => {
          swiperInstance.value.slideNext()
          store.commit('changeSliderPosition', swiperInstance.value.activeIndex)
      };
      const swiperPrevSlide = () => {
          swiperInstance.value.slidePrev()
          store.commit('changeSliderPosition', swiperInstance.value.activeIndex)
      };
      return {
          swiperPrevSlide,
          swiperNextSlide,
          onSwiper,
      };
  },
};
</script>

<template>
  <SliderControls @next-slide="swiperNextSlide" @prev-slide="swiperPrevSlide" />
  <Swiper
    ref="swiper"
    :slides-per-view="1"
    @swiper="onSwiper"
    :loop="false"
    :modules="[Navigation]"
  >
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
    <SwiperSlide>
      <SuppliesList :supplies="$store.state.supplies" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss"></style>
