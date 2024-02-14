<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <div class="swiper-controls">
    <button
      class="btn-prev"
      @click="swiper.slidePrev()"
    >
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path d="m16.67 0 2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z" /></svg>
      </div>
    </button>
    <button
      class="btn-next"
      @click="swiper.slideNext()"
    >
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ><path d="M7.33 24 4.5 21.171l9.339-9.175L4.5 2.829 7.33 0 19.5 11.996z" /></svg>
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.swiper-controls {
  /* position: absolute;
  z-index: 30;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; */
  .btn-prev, .btn-next {
    position: absolute;
    z-index: 30;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $white;
    border: 2px solid transparent;
    color: $chicory-flower;
    transition: all 0.25s ease-in-out;
    &:hover {
      border-color: $chicory-flower;
    }
    svg {
      // width: 0.5rem; // 8px
      // width: 100%;
      display: block;
      fill: currentColor;
    }
    .icon-container {
      width: 50%;
    }
  }
  .btn-prev {
    left: 6px;
    .icon-container {
      margin-right: 4px
    }
  }
  .btn-next {
    right: 6px;
    .icon-container {
      margin-left: 2px
    }
  }
}
</style>
