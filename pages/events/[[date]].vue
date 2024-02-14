<script setup>
import { computed, onMounted } from 'vue';
import { format, parse, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, lastDayOfWeek, eachDayOfInterval, startOfDay, endOfDay, isBefore, isAfter, isEqual, parseISO } from 'date-fns';
// import { useSwiper } from 'swiper/vue';

/*import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation'; */

const route = useRoute();
const config = useRuntimeConfig();
// const swiper = useSwiper();

const month = computed(() => {
  const todayMonthString = format(new Date(), 'MMMM-yyyy').toLowerCase();
  const monthString = (route.params.date)?route.params.date:todayMonthString;
  return parse(monthString, 'MMMM-yyyy', new Date());
});

/* const eventDataOld = await useFetch(`${config.public.appUrl}/api/cal-event?startsAt=${format(startOfMonth(month.value), 'yyyy-MM-dd\'T\'HH:mm:ssXX')}&endsAt=${format(endOfMonth(month.value), 'yyyy-MM-dd\'T\'HH:mm:ssXX')}`)
  .then((response) => {
    // console.log(response.data["_rawValue"]);
    const data = response["data"]["_rawValue"]['calEvent'];
    console.log(data);
    return data;
  })
  .catch((err) => {
    console.log(err);
  }); */

const eventData = ref([]);

try {
  const data = await $fetch(`${config.public.appUrl}/api/cal-event?startsAt=${format(startOfMonth(month.value), 'yyyy-MM-dd\'T\'HH:mm:ssXX')}&endsAt=${format(endOfMonth(month.value), 'yyyy-MM-dd\'T\'HH:mm:ssXX')}`);
  console.log(data);
  eventData.value = data.calEvent;
} catch(error) {
  console.log(error);
} finally {
  //
}


const previousMonth = computed(() => {
  return format(subMonths(month.value, 1), 'MMMM-yyyy').toLowerCase();
});

const nextMonth = computed(() => {
  return format(addMonths(month.value, 1), 'MMMM-yyyy').toLowerCase();
});

const calendarMonth = computed(() => {
  // https://github.com/date-fns/date-fns/issues/737
  const monthFirstDate = startOfMonth(month.value);
  const monthLastDate = endOfMonth(month.value);
  const monthFirstWeekdayDate = startOfWeek(monthFirstDate);
  const monthLastWeekdayDate = lastDayOfWeek(monthLastDate);
  const calendarMonth = [];
  const days = eachDayOfInterval({
    start: monthFirstWeekdayDate,
    end: monthLastWeekdayDate,
  });
  days.forEach((day) => {
    const calendarDay = {date: day};
    if (eventData.value) {
      const eventMatches = eventData.value.filter((event) => {
        return (isAfter(parseISO(event.startsAt), startOfDay(day)) || isEqual(parseISO(event.startsAt), startOfDay(day))) && (isBefore(parseISO(event.endsAt), endOfDay(day)) || isEqual(parseISO(event.endsAt), endOfDay(day)))
      })
      calendarDay.events = eventMatches;
    }
    calendarMonth.push(calendarDay);
  });
  return calendarMonth;
});

// const slideshowImgs = Array(6).fill(null).map((_, i) => i);

onMounted(() => {
  /* const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
  }); */
});

</script>

<template>
  <div>
    <h1>Calendar</h1>
    <div class="content">
      <EventsSlideshow class="slideshow-container" />
      <p>
        Do you have a church youth group, scout troop, fraternity or sorority, or employee group looking for a fun and affordable event?   What about a unique birthday party for your son or daughter? Booking the maze at Four Green Fields is just what you're looking for.   After all, what could be better than spending time outside in the beautiful Michigan fall weather?  If you just want to book a hay ride or sleigh ride without doing the maze, click on the <router-link to="/rides">
          Hay &amp; Sleigh Rides
        </router-link> page for details.
      </p>

      <p>A private maze booking gives you the Maze all to yourselves and access to our fire pit and picnic area. You can go through the maze and then gather back around a roaring bonfire and munch on whatever goodies you want to bring with you. How about roasting hotdogs over the fire? Better yet, roast marshmallows and then make Smores. You can also walk the trails on the farm and enjoy the beautiful fall colors. (Helps burn off a few of those extra calories.)</p>

      <p>Want to make the event really special?  How about combining a maze visit with a hay ride? You can add a horse drawn wagon ride to your maze booking for just $50.</p>

      <p>We offer special discounted group rates and use of the picnic area is only $10.  Just look at the calendar and see if the date and time you want is available.  Contact us at (231) 580-1463 or at <a href="mailto:fourgreenfieldsman@yahoo.com">fourgreenfieldsman@yahoo.com</a> when you are ready to book or if you have any questions.  If you want to come when the maze is in operation on Saturday and Sunday, you can still book the picnic area for your group.</p>

      <p>We'd be happy to give you names of folks who have booked in the past if you'd like to hear from them.</p>

      <hr>
    <!-- <div class="swiper">
      <BaseSlideshowItem v-for="img in slideshowImgs" :key="img" :thumbnail="`/assets/img/photos/cropped/events${img + 1}.jpg`" :img="`/assets/img/photos/events${img + 1}.jpg`" :alt="`Event page photo ${img + 1}`" />
    </div> -->
    </div>
    <header
      id="calendar"
      class="calendar-header"
    >
      <h2>{{ format(month, 'MMMM') }}</h2>
      <ul>
        <li>
          <router-link :to="`/events/${ previousMonth }#calendar`">
            Last Month
          </router-link>
        </li>
        <li>
          <router-link :to="`/events/${ nextMonth }#calendar`">
            Next Month
          </router-link>
        </li>
      </ul>
    </header>
    <div class="calendar">
      <div class="day-label">
        Sunday
      </div>
      <div class="day-label">
        Monday
      </div>
      <div class="day-label">
        Tuesday
      </div>
      <div class="day-label">
        Wednesday
      </div>
      <div class="day-label">
        Thursday
      </div>
      <div class="day-label">
        Friday
      </div>
      <div class="day-label">
        Saturday
      </div>
      <CalendarDay
        v-for="calendarDay in calendarMonth"
        :key="calendarDay.date"
        :calendar-day="calendarDay"
        :month="month"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  .days {
    display: flex;
    grid-column: 1 / 8;
  }
}

hr {
  color: $gray-400;
  margin-top: 1.5rem; // 24px
  margin-bottom: 1.5rem; // 24px
}

header.calendar-header {
  // display: flex;
  @include bp-sm-phone-landscape {
    display: flex;
    flex-direction: column;
  }
  h2 {
    text-align: center;
    @include bp-sm-phone-landscape {
      order: 2;
      margin-top: 0;
    }
  }
  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: space-between;
    @include bp-sm-phone-landscape {
      order: 1;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}

.slideshow-container {
  margin: 0 auto 1rem auto; // 16px
  @include bp-sm-phone-landscape {
    float: left;
    margin: 0 1rem 1rem 0; // 16px
  }
}

</style>