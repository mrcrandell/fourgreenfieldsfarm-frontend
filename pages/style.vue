<script setup>

definePageMeta({
  layout: false,
});

</script>

<template>
  <main class="main style-page">
    <header class="style-header">
      <div class="logo-container">
        <AppLogo />
      </div>
    </header>
    <h1>Style</h1>
    <div class="corner-art">
      <div class="top-left" />
      <div class="top-right" />
      <div class="bottom-left" />
      <div class="bottom-right" />
    </div>
  </main>
</template>

<style lang="scss" scoped>

.style-page {
  position: relative;
  padding: 25px 65px;
}

.corner-art div {
  position: absolute;
  height: 25px;
  width: 25px;
  @include bp-lg-laptop {
    height: 50px;
    width: 50px;
  }
  &.top-left {
    top: 5px;
    left: 5px;
    background: url('~/assets/img/corner-art-top-left.svg') no-repeat;
    background-size: contain;
  }
  &.top-right {
    top: 5px;
    right: 5px;
    background: url('~/assets/img/corner-art-top-right.svg') no-repeat;
    background-size: contain;
  }
  &.bottom-left {
    bottom: 5px;
    left: 5px;
    background: url('~/assets/img/corner-art-bottom-left.svg') no-repeat;
    background-size: contain;
  }
  &.bottom-right {
    bottom: 5px;
    right: 5px;
    background: url('~/assets/img/corner-art-bottom-right.svg') no-repeat;
    background-size: contain;
  }
}

</style>