<script setup>
import IconMap from '@/assets/icons/map.svg';
import IconFacebook from '@/assets/icons/facebook.svg';

definePageMeta({
  title: 'Four Green Fields Farm - Rodney, MI',
  description: 'Corn maze, pumpkin patch, hay and sleigh rides in Rodney, MI'
});
</script>

<template>
  <div>
    <h1>Welcome to the Four Green Fields Farm</h1>
    <div class="content">
      <BaseModalImg
        class="featured-img-right"
        thumbnail-img="/assets/img/photos/enterance-sign-pic.jpg"
        img="/assets/img/photos/enterance-sign-pic.jpg"
        alt="Four Green Fields Enterance Sign"
      />
      <p>We are located about 7 miles east of US 131 off exit 139 and about 5 miles east of the City of Big Rapids.</p>
      <div class="btn-container">
        <router-link
          class="btn btn-primary"
          to="/directions"
        >
          <IconMap />
          <i
            class="fa fa-map-o"
            aria-hidden="true"
          /> Driving &amp; Directions
        </router-link>
        <a
          class="btn btn-tertiary"
          href="http://www.facebook.com/pages/Rodney-MI/Four-Green-Fields-Farm/101570023237276"
          target="_blank"
        >
          <IconFacebook />
          <i
            class="fa fa-facebook-official"
            aria-hidden="true"
          /> Find Us on Facebook</a>
      </div>
      <hr>
      <p class="text-center">
        <strong>Check the calendar on <router-link to="/events">Group Bookings/Events</router-link> for weather related cancellations.</strong>
      </p>
      <hr>

      <!-- <p>Every year we are open, we have more fun than the year before. This is the 16th anniversary of the Corn Maze. Our maze, pumpkin patch, and horse drawn wagon rides are all waiting for you still at the same low prices as the day we opened in 2007 (see details below). Don't forget that on Friday and Saturday nights in October we haunt the maze for those brave souls not afraid of what lurks in a dark corn field. Want the Maze all to yourself? We love doing private group bookings. They are great for scouts, church youth groups, family outings, friends, and birthday parties. We offer you use of our picnic area, pavilion, field stone grill, and bonfire pit too. We can also accommodate groups during regular business hours so give us a call.</p> -->

      <p>Thanks to all of our wonderful customers who gave us another great and fun filled fall season.  We never get tired of seeing all the smiles, seeing old friends and meeting new ones, or hearing the screams and laughter in the Haunted Maze. It is truly a joy and blessing to have you visit our farm. Now it's sleigh ride season so put on some warm clothes and boots, book a sleigh ride, and come enjoy Michigan's winter wonderland. Check out what we can offer you by clicking on our "Hay & Sleigh Rides" tab <strong>and then check the calendar on the "Reservations and Events" tab and see what days are open.</strong></p>

      <hr>

      <h2>Four Green Fields Farm Corn Maze<br><small>FUN FOR ALL AGES</small></h2>

      <div class="hours-prices">
        <div>
          <h3>Corn Maze</h3>
          <p>Saturday, September 23 to October 29</p>
          <h4>Hours</h4>
          <table class="table">
            <tr>
              <th>Saturday</th>
              <td>Noon to 5:30pm</td>
            </tr><tr>
              <th>Sundays</th>
              <td>2pm to 5pm</td>
            </tr>
          </table>
          <h4>Prices</h4>
          <table class="table">
            <tr>
              <th>Admission</th>
              <td>$3</td>
            </tr><tr>
              <th>Kids under 5</th>
              <td>Free!</td>
            </tr><tr>
              <th>Horse Drawn Wagon Rides</th>
              <td>$2</td>
            </tr>
          </table>
        </div>
        <div>
          <h3>Haunted Maze</h3>
          <p>October 7 to October 28</p>
          <h4>Hours</h4>
          <table class="table">
            <tr>
              <th>Friday</th>
              <td>8pm to 10:30pm</td>
            </tr><tr>
              <th>Saturday</th>
              <td>8pm to 10:30pm</td>
            </tr>
          </table>
          <h4>Prices</h4>
          <table class="table">
            <tr>
              <th>Admission</th>
              <td>$4</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.featured-img-right {
  margin: 0 auto 1rem auto; // 16px
  text-align: center;
  max-width: 300px;
  @include bp-sm-phone-landscape {
    float: right;
    margin: 0 0 1rem 1rem; // 16px
  }
}

.btn-container {
  .btn {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto 1rem auto; // 16px
    svg {
      width: 1em;
      fill: currentColor;
      margin-right: 0.25rem; // 4px
    }
  }
}

</style>
