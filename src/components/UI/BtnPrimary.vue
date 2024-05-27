<template>
    <button class="btn-primary">
      <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'BtnPrimary'
  }
</script>

<style lang="scss" scoped>
  .btn-primary {
    border: none;
    display: block;
    cursor: pointer;
    padding: 14px 0;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    background-color: #0069B4;
    color: #fff;
}

.btn-primary:hover {
  background-color: #013357
}
</style>