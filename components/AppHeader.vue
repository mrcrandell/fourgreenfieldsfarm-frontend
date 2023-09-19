<template>
  <header class="header">
    <AppLogo />
    <div class="corner-art">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.header {
  position: relative;
  background-color: $white;
}
.corner-art div {
  position: absolute;
  height: 25px;
  width: 25px;
  @include bp-md-tablet {
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