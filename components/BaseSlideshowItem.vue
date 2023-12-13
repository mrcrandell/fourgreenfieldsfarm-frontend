<script setup>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  thumbnail: {
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
  }
})

const isModalOpen = ref(false)

function openImg () {
  isModalOpen.value = true
}

</script>

<template>
  <div class="item">
    <a
      class="slideshow-link thumbnail-popup"
      :href="img"
      @click.prevent="openImg"
    ><img
      :src="thumbnail"
      class="img-responsive center-block"
      :alt="alt"
    ></a>

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
  </div>
</template>

<style lang="scss" scoped>
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
