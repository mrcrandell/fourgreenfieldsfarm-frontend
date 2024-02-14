<script setup>
const openedImg = ref('');
const isModalOpen = ref(false);

function openImg (img) {
  openedImg.value = img
  isModalOpen.value = true
}
</script>

<template>
  <div class="slideshow-container">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <slot :events="{ openImg }" />
      <BaseSlideshowControls />
    </Swiper>
    <BaseModal
      class="modal-img"
      :is-shown="isModalOpen"
      @closed="isModalOpen = false"
    >
      <template #header>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="isModalOpen = false"
        >
          Close
        </button>
      </template>
      <div class="image">
        <img
          :src="openedImg"
          alt=""
          class="img-responsive center-block"
        >
      </div>
    </BaseModal>
  </div>
</template>
<style lang="scss" scoped>
.slideshow-container {
  position: relative;
  border: 4px solid $camarone;
  @include shadow-1();
  // width: 300px;
  :deep(a), :deep(.slideshow-img) {
    display: block;
  }
}
.modal-img :deep(.modal-dialog) {
  max-width: 900px;
  .image img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
