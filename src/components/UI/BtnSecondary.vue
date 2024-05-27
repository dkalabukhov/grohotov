<template>
  <button class="btn-secondary">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'BtnSecondary'
  }
</script>

<style lang="scss" scoped>
.btn-secondary {
  border: none;
  display: block;
  cursor: pointer;
  padding: 14px 0;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #0069B4;
  color: #0069B4;
}
.btn-secondary:hover {
  background-color: #013357;
  color: #fff;
}
</style>