<template>
  <header class="header">
    <div class="header-top">
      <router-link class="logo-container" to="/">
        <AppLogo />
      </router-link>
      <div class="header-slogan">
        <div>From Ireland to America, We Work the Land</div>
        <div>O Eirinn go Mericea, Oibrimid ar an Talamh</div>
        <div>Rodney, MI 49342</div>
      </div>
    </div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/history">Our History</router-link></li>
        <li><router-link to="/syrup">Syrup</router-link></li>
        <li><router-link to="/honey">Honey</router-link></li>
        <li><router-link to="/pumpkin-patch">Pumpkin Patch</router-link></li>
        <li>
          <a>Corn Maze</a>
          <ul class="dropdown-menu" role="menu">
            <li><router-link to="/maze">How to Play</router-link></li>
            <li><router-link to="/building-the-maze">Building the Maze</router-link></li>
            <li><router-link to="/haunted-maze">Haunted Maze</router-link></li>
          </ul>
        </li>
        <li><router-link to="/rides">Hay &amp; Sleigh Rides</router-link></li>
        <li><router-link to="/events">Reservations &amp; Events</router-link></li>
      </ul>
    </nav>
    
    
    <div class="corner-art">
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.header {
  position: relative;
  background-color: $white;
  padding: 1rem;
  font-family: $font-family-serif;
  @include bp-md-tablet {
    padding: 25px 65px 0;
    margin: 15px;
    @include shadow-2();
  }
  .logo-container {
    display: block;
    max-width: 200px;
    @include bp-md-tablet {
    max-width: 400px;
    }
    svg {
      width: 100%;
      height: auto;
    }
  }
  .header-top {
    display: flex;
    .header-slogan {
      display: none;
      @include bp-md-tablet {
        display: block;
      text-align: right;
      margin-left: auto;
      }
      > div {
        margin-bottom: 2px;
        color: $camarone;
      }
    }
  }
}
.corner-art div {
  position: absolute;
  height: 25px;
  width: 25px;
  @include bp-md-tablet {
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