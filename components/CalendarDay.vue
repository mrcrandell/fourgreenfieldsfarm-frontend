<script setup>
import { ref, computed, onMounted } from 'vue'
import { format, parseISO } from 'date-fns'
const route = useRoute()
const props = defineProps({
  calendarDay: {
    type: Object,
    default: () => {},
  },
  month: {
    type: Date,
    default: function () { return new Date() }
  }
});

const isModalOpen = ref(false);

const isThisMonth = computed(() => {
  return props.calendarDay.date.getMonth() === props.month.getMonth()
});

const isToday = computed(() => {
  const todaysDate = new Date()
  return props.calendarDay.date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)
});

const hasEvents = computed(() => {
  return props.calendarDay.events && props.calendarDay.events.length > 0
});

onMounted(() => {
  if (route.query.event && props.calendarDay.events.find(calEvent => (calEvent.id === Number(route.query.event)))) {
    console.log(props.calendarDay)
    isModalOpen.value = true
  }
});

</script>
<template>
  <div
    class="day"
    :class="[{'not-this-month': !isThisMonth},{'is-today': isToday}, {'has-events': hasEvents}]"
  >
    {{ format(calendarDay.date, 'd') }} {{ }}
    <a
      v-for="calEvent in calendarDay.events"
      :key="calEvent.id"
      :href="`${route.path}?event=${calEvent.id}`"
      class="cal-event"
    >{{ calEvent.name }}</a>

    <BaseModal
      :is-shown="isModalOpen"
      @closed="isModalOpen = false"
    >
      <template #header>
        <h1 class="modal-title">
          {{ format(calendarDay.date, 'EEEE, MMMM d, yyyy') }}
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="isModalOpen = false"
        >
          Close
        </button>
      </template>
      <div>
        <div
          v-for="calEvent in calendarDay.events"
          :key="calEvent.id"
          class="event-description"
        >
          <h2>{{ calEvent.name }}</h2>

          <div
            v-if="!calEvent.isAllDay"
            class="event-time"
          >
            {{ format(parseISO(calEvent.startsAt), 'h:mmaaa') }}{{ (calEvent.isHasEndsAt)? ` - ${format(parseISO(calEvent.endsAt), 'h:mmaaa')}`:null }}
          </div>
          <div
            v-if="calEvent.hauntedBy"
            class="event-time"
          >
            Haunted By: {{ calEvent.hauntedBy }}
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-if="calEvent.description"
            class="event-description-text"
            v-html="calEvent.description"
          />
          <!--eslint-enable-->
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<style lang="scss" scoped>
.not-this-month {
  color: #70757a;
}
.is-today {
  background-color: #f5f5f5;
}

.has-events {
  cursor: pointer;
}

.day {
  padding: 0.5rem 0.125rem; // 8px 2px
  border-top: 1px solid $gray-400;
  @include bp-md-tablet {
    min-height: 80px;
    padding-left: 0.5rem; // 8px
    padding-right: 0.5rem; // 8px
  }
  a.cal-event {
    display: block;
    font-size: 0.5rem; // 8px
    margin-bottom: 0.25rem; // 4px
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 30px;
    @include bp-md-tablet {
      font-size: 0.75rem; // 12px
      white-space: normal;
      max-width: none;
    }
  }
  .event-description {
    padding: 0.5rem; // 8px
    &:not(:last-child) {
      border-bottom: 1px solid $gray-400;
    }
    > h2 {
      margin-top: 0;
      margin-bottom: 0.5rem; // 8px
      font-size: 1.25rem; // 20px
    }
    > div {
    margin-bottom: 0.125rem; // 2px
  }
  }
  .event-description-text {
    :deep(p) {
      margin: 0;
      margin-bottom: 1rem; // 16px
    }
  }
}

</style>
