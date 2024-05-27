<template>
  <button class="btn-primary_smaller-text">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BtnPrimarySmallerText'
  }
</script>

<style lang="scss" scoped>
.btn-primary_smaller-text {
  border: none;
  display: block;
  cursor: pointer;
  padding: 14px 0;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  background-color: #0069B4;
  color: #fff;
}

.btn-primary_smaller-text:hover {
  background-color: #013357;
  color: #fff;
}
</style>