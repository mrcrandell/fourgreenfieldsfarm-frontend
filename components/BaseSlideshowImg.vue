<script setup>
defineEmits(['openImg']);
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
});
</script>
<template>
  <a
    class="slideshow-link thumbnail-popup"
    :href="img"
    @click.prevent="$emit('openImg', img)"
  >
    <img
      :src="thumbnailImg"
      class="slideshow-img"
      :alt="alt"
    >
  </a>
</template>