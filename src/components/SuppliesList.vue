<template>
  <div class="supplies-wrapper">
    <SupplyCard
     v-for="supply in supplies"
     :key="supply.id"
     :supply="supply" />
  </div>
</template>

<script>
  import SupplyCard from '@/components/SupplyCard.vue';
  export default {
    components: {
      SupplyCard
    },
  props: {
    supplies: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  .supplies-wrapper {
    display: flex;
  }
</style>