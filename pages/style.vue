<script setup>

const colorPalette = ref([
  {
    name: 'Camarone',
    hex: '#005a2c',
  },
  {
    name: 'Green Haze',
    hex: '#00a651',
  },
  {
    name: 'Holly',
    hex: '#000e07',
  },
  {
    name: 'Supernova',
    hex: '#ffcb05',
  },
  {
    name: 'Mustard',
    hex: '#FFDB52',
  },
  {
    name: 'Pirate Gold',
    hex: '#b89100',
  },
  {
    name: 'Chicory Flower',
    hex: '#647b97',
  },
  {
    name: 'Bali Hai',
    hex: '#91a2b6',
  },
  {
    name: 'Rainmaker',
    hex: '#465669',
  },
  {
    name: 'Success',
    hex: '#00a651',
  },
  {
    name: 'Danger',
    hex: '#ce3d3a',
  },
]);

function submitForm() {
  console.log('submit');
}

definePageMeta({
  layout: false,
});

</script>

<template>
  <main class="main style-page">
    <header class="style-header">
      <div class="logo-container">
        <AppLogo />
      </div>
    </header>
    <header class="title-header">
      <h1>Style</h1>
    </header>
    <div class="content">
      <div>
        <h2>Color Scheme</h2>
        <ColorSwatches>
          <ColorSwatch
            v-for="colorSwatch in colorPalette"
            :key="colorSwatch.name"
            :color-swatch="colorSwatch"
          />
        </ColorSwatches>
      </div>
      <div>
        <h2>Typography</h2>

        <h1>Heading 1</h1>
        <p class="details">
          Font: Carto / Camarone #005a2c
        </p>

        <hr>

        <h2>Heading 2</h2>
        <p class="details">
          Font: Carto / Pirate Gold #b89100
        </p>

        <hr>

        <h3>Heading 3</h3>
        <p class="details">
          Font: Carto / Holly #000e07
        </p>

        <hr>

        <p>Body Text</p>
        <p>Lorem ipsum dolor sit amet, quis quam, fusce duis. Montes vestibulum esse, tristique dui lorem. Wisi cubilia. Nonummy justo, eros aliquet elit, nulla sollicitudin ut. Iaculis sit lacus, nisi orci nunc, pede convallis vestibulum.</p>
        <p>Sed tellus. Posuere est quis, lacus sit nec. Ultricies vehicula arcu, nunc nonummy id. Vivamus odio neque, faucibus duis. Non diam amet, elit nec semper.</p>

        <p>
          <a href="#">This is a link</a> - <a
            href="#"
            class="hover"
          >This is a hover link</a>
        </p>

        <p class="details">
          Font: Lato #252525
        </p>
      </div>
      <div>
        <h2>Buttons</h2>

        <p>
          <button
            type="button"
            class="btn btn-lg btn-primary"
          >
            Primary
          </button>
          <button
            type="button"
            class="btn btn-secondary"
          >
            Secondary
          </button>
          <button
            type="button"
            class="btn btn-sm btn-tertiary"
          >
            Tertiary
          </button>
        </p>
      </div>
      <div>
        <h2>Forms</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="input1">Label</label>
            <input
              id="input1"
              class="form-control"
              placeholder="Placeholder"
            >
          </div>
          <div class="form-group">
            <label for="input2">Label</label>
            <input
              id="input2"
              class="form-control is-invalid"
              placeholder="Placeholder"
            >
            <div class="invalid-feedback">
              There was an error.
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <div class="corner-art">
      <div class="top-left" />
      <div class="top-right" />
      <div class="bottom-left" />
      <div class="bottom-right" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_fonts.scss';
@import '~/assets/scss/_reboot.scss';
@import '~/assets/scss/_typography.scss';
@import '~/assets/scss/_buttons.scss';
@import '~/assets/scss/_forms.scss';
@import '~/assets/scss/_modals.scss';
@import '~/assets/scss/_global.scss';

.style-page {
  position: relative;
  padding: 25px 65px;
  .logo-container {
    max-width: 722px;
  }
}

.content {
  display: grid;
  grid-gap: 30px;
  @include bp-md-tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.corner-art div {
  position: absolute;
  height: 25px;
  width: 25px;
  @include bp-lg-laptop {
    height: 50px;
    width: 50px;
  }
  &.top-left {
    top: 5px;
    left: 5px;
    background: url('~/assets/img/corner-art-top-left.svg') no-repeat;
    background-size: contain;
  }
  &.top-right {
    top: 5px;
    right: 5px;
    background: url('~/assets/img/corner-art-top-right.svg') no-repeat;
    background-size: contain;
  }
  &.bottom-left {
    bottom: 5px;
    left: 5px;
    background: url('~/assets/img/corner-art-bottom-left.svg') no-repeat;
    background-size: contain;
  }
  &.bottom-right {
    bottom: 5px;
    right: 5px;
    background: url('~/assets/img/corner-art-bottom-right.svg') no-repeat;
    background-size: contain;
  }
}

</style>