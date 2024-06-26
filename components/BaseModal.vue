<script setup lang="ts">
import { ref, watch, useSlots } from 'vue'

const slots = useSlots()

const prop = defineProps({
  isShown: {
    type: Boolean,
    default: false
  },
  isDisableClosingOnMask: {
    type: Boolean,
    default: false
  },
  disableScrolling: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['closed'])
const isShownComplete = ref(false)

function close () {
  emit('closed')
}
function closeFromMask () {
  if (prop.isDisableClosingOnMask) { return }
  close()
}
watch(
  () => prop.isShown,
  () => {
    function disableScroll () {
      document.body.style.overflow = 'hidden'
    }
    function enableScroll () {
      document.body.style.overflow = 'auto'
    }
    if (prop.isShown) {
      if (!prop.disableScrolling) {
        disableScroll()
      }
      setTimeout(() => {
        isShownComplete.value = true
      }, 100)
    } else {
      enableScroll()
      isShownComplete.value = false
    }
  }
)
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="isShown"
      class="modal"
      tabindex="-1"
      :class="{ show: isShownComplete }"
      @click.self="closeFromMask"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            v-if="slots.header"
            class="modal-header"
          >
            <slot name="header" />
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div
            v-if="slots.footer"
            class="modal-footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-dialog {
  position: relative;
  z-index: 1055;
  width: auto;
  margin: 0.5rem; // 8px
  pointer-events: none;
  transition: transform 0.3s ease-out;

  @include bp-sm-phone-landscape {
    max-width: 500px;
    margin-top: 1.75rem; // 28px
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1.75rem; // 28px
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-dialog {
    transform: translate(0, -50px);
  }
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1055;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba($color: #000, $alpha: 50%);
  outline: 0;
}

.modal-content {
  pointer-events: auto;
  background-color: #fff;
  @include shadow-2();
}
</style>
