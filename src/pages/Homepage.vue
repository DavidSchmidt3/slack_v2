<template>
  <q-page class="bg-grey-4 row justify-center items-center">
    <div class="col-12 text-center center">
      <h2 class="title">Welcome Dávid Schmidt</h2>
      <h3 class="title date-title">Todays date:</h3>
      <h3 class="title date-title">{{ date }}</h3>
    </div>
    <div class="col-12 text-center center channels_section">
      <div class="separator"></div>
      <h2 class="channels_title">#Channels</h2>
      <div class="separator"></div>
    </div>

    <div class="row text-center center justify-evenly channels">
      <div class="col-xs-12 col-sm-6 col-xl-3">
        <div class="avatar lt-gt-xs">
          <q-btn round to="/channel">
            <q-avatar
              class="q-p-lg"
              size="120px"
              font-size="40px"
              color="blue"
              text-color="white"
              icon="groups"
            />
          </q-btn>
          <div class="row justify-center q-mt-sm">PSI</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-xl-3">
        <div class="avatar lt-gt-xs">
          <q-btn round to="/channel">
            <q-avatar
              class="q-p-lg"
              size="120px"
              font-size="40px"
              color="blue"
              text-color="white"
              icon="groups"
            />
          </q-btn>
          <div class="row justify-center q-mt-sm">DBS 2022</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-xl-3">
        <div class="avatar lt-gt-xs">
          <q-btn round to="/channel">
            <q-avatar
              class="q-p-lg"
              size="120px"
              font-size="40px"
              color="blue"
              text-color="white"
              icon="groups"
            />
          </q-btn>
          <div class="row justify-center q-mt-sm">MTAA</div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-xl-3">
        <div class="avatar lt-gt-xs">
          <q-btn round to="/channel">
            <q-avatar
              class="q-p-lg"
              size="120px"
              font-size="40px"
              color="blue"
              text-color="white"
              icon="groups"
            />
          </q-btn>
          <div class="row justify-center q-mt-sm">VPWA</div>
        </div>
      </div>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<style lang="scss">
.line {
  width: 800px;
  height: 47px;
  border-bottom: 1px solid black;
  position: absolute;
}

.avatar {
  margin: 5rem;
  @media (max-width: $breakpoint-xs) {
    margin: 1rem;
  }
}

.homepage_menu {
  max-width: fit-content;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: black;
}

.channels_title {
  @media (max-width: $breakpoint-sm) {
    font-size: 3rem;
  }
  margin: 15px;
}

.title {
}

.date-title {
  @media (min-width: $breakpoint-xs) {
    display: inline-block;
    font-size: 3rem;
    margin: 1rem;
  }
  font-size: 2rem;
  margin: 0px;
}

.channels_section {
  margin: 20px 0;
}
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      date: new Date().toLocaleString('sk-SK', { dateStyle: 'short' }),
      email: '',
      password: '',
    };
  },
};
</script>
