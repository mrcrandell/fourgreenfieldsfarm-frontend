<script setup>
defineProps({
  thumbnailImg: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  }
});
const isModalOpen = ref(false);
</script>

<template>
  <figure class="thumbnail">
    <a
      class="thumbnail-popup"
      :href="img"
      @click.prevent="isModalOpen = true"
    >
      <img
        :src="thumbnailImg"
        class="slideshow-img"
        :alt="alt"
      >
    </a>
    <!-- eslint-disable vue/no-v-html -->
    <figcaption
      v-if="caption"
      class="caption"
      v-html="caption"
    />
    <!--eslint-enable-->
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
          :src="img"
          alt=""
          class="img-responsive center-block"
        >
      </div>
    </BaseModal>
  </figure>
</template>

<style lang="scss" scoped>
.thumbnail-popup {
  display: inline-block;
  border: 4px solid $camarone;
  @include shadow-1();
  img {
    display: block;
    max-width: 100%;
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