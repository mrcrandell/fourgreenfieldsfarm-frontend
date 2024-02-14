<script setup>
const isYoutubeModalOpen = ref(false);
</script>
<template>
  <div>
    <h1>It's Time to Slow Down and Relax</h1>
    <div class="content">
      <div class="slideshow-container">
        <BaseSlideshow class="slideshow">
          <!-- eslint-disable-next-line vue/no-lone-template -->
          <template v-slot:="{ events: { openImg } }">
            <SwiperSlide>
              <img
                src="/assets/img/photos/heysleigh-youtube-1.jpg"
                class="slideshow-img open-modal"
                alt="Hay &amp; Sleigh Rides YouTube Video"
                @click="isYoutubeModalOpen = true"
              >
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh1.jpg"
                img="/assets/img/photos/heysleigh1.jpg"
                alt="Photo of Hay and Sleigh Rides 1"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/heysleigh2.jpg"
                img="/assets/img/photos/heysleigh2.jpg"
                alt="Photo of Hay and Sleigh Rides 2"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/heysleigh4.jpg"
                img="/assets/img/photos/heysleigh4.jpg"
                alt="Photo of Hay and Sleigh Rides 4"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh5.jpg"
                img="/assets/img/photos/heysleigh5.jpg"
                alt="Photo of Hay and Sleigh Rides 5"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/heysleigh6.jpg"
                img="/assets/img/photos/heysleigh6.jpg"
                alt="Photo of Hay and Sleigh Rides 6"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/heysleigh7.jpg"
                img="/assets/img/photos/heysleigh7.jpg"
                alt="Photo of Hay and Sleigh Rides 7"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh8.jpg"
                img="/assets/img/photos/heysleigh8.jpg"
                alt="Photo of Hay and Sleigh Rides 8"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/heysleigh10.jpg"
                img="/assets/img/photos/heysleigh10.jpg"
                alt="Photo of Hay and Sleigh Rides 10"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh11.jpg"
                img="/assets/img/photos/heysleigh11.jpg"
                alt="Photo of Hay and Sleigh Rides 11"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh12.jpg"
                img="/assets/img/photos/heysleigh12.jpg"
                alt="Photo of Hay and Sleigh Rides 12"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh13.jpg"
                img="/assets/img/photos/heysleigh13.jpg"
                alt="Photo of Hay and Sleigh Rides 13"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh15.jpg"
                img="/assets/img/photos/heysleigh15.jpg"
                alt="Photo of Hay and Sleigh Rides 15"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh16.jpg"
                img="/assets/img/photos/heysleigh16.jpg"
                alt="Photo of Hay and Sleigh Rides 16"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh17.jpg"
                img="/assets/img/photos/heysleigh17.jpg"
                alt="Photo of Hay and Sleigh Rides 17"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh18.jpg"
                img="/assets/img/photos/heysleigh18.jpg"
                alt="Photo of Hay and Sleigh Rides 18"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh20.jpg"
                img="/assets/img/photos/heysleigh20.jpg"
                alt="Photo of Hay and Sleigh Rides 20"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh23.jpg"
                img="/assets/img/photos/heysleigh23.jpg"
                alt="Photo of Hay and Sleigh Rides 23"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh24.jpg"
                img="/assets/img/photos/heysleigh24.jpg"
                alt="Photo of Hay and Sleigh Rides 24"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh25.jpg"
                img="/assets/img/photos/heysleigh25.jpg"
                alt="Photo of Hay and Sleigh Rides 25"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh26.jpg"
                img="/assets/img/photos/heysleigh26.jpg"
                alt="Photo of Hay and Sleigh Rides 26"
                @open-img="openImg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BaseSlideshowImg
                thumbnail-img="/assets/img/photos/cropped/heysleigh27.jpg"
                img="/assets/img/photos/heysleigh27.jpg"
                alt="Photo of Hay and Sleigh Rides 27"
                @open-img="openImg"
              />
            </SwiperSlide>
          </template>
        </BaseSlideshow>
      </div>
      <BaseModalImg
        class="featured-img-left"
        thumbnail-img="/assets/img/photos/cropped/rides1.jpg"
        img="/assets/img/photos/rides1.jpg"
        alt="Rides 1"
      />
      <p>We offer private group wagon and sleigh ride opportunities from September to March in addition to wagon rides when our Maze is open and sleigh rides.* We generally only book one group a day because we want you to enjoy the experience and the beauty of our farm at your own pace.  We can take groups of up to 12 people on the wagon at a time (a few more if some are kids or real skinny) and our prices will fit the budget of even the most cost conscious group. (Prices are listed below.) We can take groups of any size but just understand that only 12 or so can go on the wagon at once. If you've got a really big group, Rocky and Charlie have friends so contact us and we'll try to add a second team and sleigh.</p>

      <p>There are 2.2 miles of trails throughout our farm that cut through open fields, woods, and wetlands giving you a chance to see the natural diversity of the farm. We have a warming house for your use and an area set up for camp fires so there is no need to hurry off at the end of your ride. You can bring your own goodies and sit around a roaring fire, visit, roast hot dogs, make smores, or just &quot;be.&quot;  We'll do our best to make you comfortable and no one will be pushing you down the road so toss another log on the fire and relax.   As an old Irishman once said, &quot;You'd better slow down boyo or you'll be chasin' your own shadow for sure.&quot;</p>

      <BaseModalImg
        class="featured-img-right"
        thumbnail-img="/assets/img/photos/cropped/rides3.jpg"
        img="/assets/img/photos/rides3.jpg"
        alt="Rides 3"
        caption="Rocky and Charlie are ready to go,<br> all they need is you."
      />

      <p>Here is what you can look forward to seeing in the winter.  Think about it:  A frosty ride through the woods to a roaring bonfire where you can laugh talk and realize what beauty Michigan has no matter the season. If you book in the winter and there is no snow, don't worry we will just use the wheeled wagon.</p>

      <div class="clearfix" />

      <div class="clearfix" />
      <p class="text-center">
        <strong>Wagon/Sleigh Ride with bonfire and use of our warming house is $80. Please contact us for pricing options for groups of 40 or more people.</strong>
      </p>

      <p>If you'd like to combine the corn maze experience with a wagon ride, contact us for details on how you can do that. You can contact us at the email link or phone number on our home page.</p>

      <p>*We use the sleigh if there is enough snow and if not we used the wheeled wagon.</p>
    </div>
    <BaseModal
      class="modal-video"
      :is-shown="isYoutubeModalOpen"
      @closed="isYoutubeModalOpen = false"
    >
      <template #header>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="isYoutubeModalOpen = false"
        >
          Close
        </button>
      </template>
      <div class="image">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            width="853"
            height="480"
            src="https://www.youtube.com/embed/4MDSAb9MyoY"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<style lang="scss" scoped>

.slideshow {
  max-width: 800px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem; // 16px
}

.modal-video :deep(.modal-dialog) {
  max-width: 900px;
}

.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;

  .embed-responsive-item,
  iframe,
  embed,
  object,
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }
}

// Modifier class for 16:9 aspect ratio
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

// Modifier class for 4:3 aspect ratio
.embed-responsive-4by3 {
  padding-bottom: 75%;
}

.featured-img-left {
  margin: 0 auto 1rem auto; // 16px
  text-align: center;
  @include bp-sm-phone-landscape {
    float: left;
    margin: 0 1rem 1rem 0; // 16px
  }
}

.featured-img-right {
  margin: 0 auto 1rem auto; // 16px
  text-align: center;
  @include bp-sm-phone-landscape {
    float: right;
    margin: 0 0 1rem 1rem; // 16px
  }
}

</style>
