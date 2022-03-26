<template>
  <q-page class="bg-grey-4 row justify-center items-center">
    <q-page-section class="col-12 text-center center">
      <h3 style="margin: 2rem">Welcome Dávid Schmidt</h3>
      <h4 class="date-title">Today's date:</h4>
      <h4 class="date-title">{{ date }}</h4>
    </q-page-section>

    <q-page-section class="col-12 text-center center channels_section">
      <div class="separator"></div>
      <h2 class="channels_title">#Invites</h2>
      <div class="separator"></div>
    </q-page-section>

    <q-page-section class="row text-center center justify-evenly channels">
      <div
        class="flex column text-center center justify-evenly channels"
        style="height: 100%"
      >
        <q-scroll-area style="height: 14rem; width: 100vw; display: flex">
          <div
            class="row no-wrap text-center flex justify-center items-center"
            style="height: 9rem; margin-top: 3rem"
          >
            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md shadow-15"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm text-weight-bold">FIIT</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md shadow-15"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm text-weight-bold">
                DBS 2022
              </h6>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </q-page-section>

    <q-page-section
      class="col-12 text-center center channels_section"
      style="margin-top: -1rem"
    >
      <div class="separator"></div>
      <h2 class="channels_title">#Channels</h2>
      <div class="separator"></div>
    </q-page-section>

    <q-page-section class="row text-center center justify-evenly channels">
      <div
        class="flex column text-center center justify-evenly channels q-mb-md"
        style="height: 100%"
      >
        <q-scroll-area style="height: 14rem; width: 100vw; display: flex">
          <div
            class="row no-wrap text-center flex justify-center items-center"
            style="height: 9rem; margin-top: 3rem"
          >
            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">PKS</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">PAP</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">VAVA</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">WTECH</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">PIS</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">PSI</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">VPWA</h6>
            </div>

            <div class="avatar">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
              </q-btn>
              <h6 class="row justify-center q-mt-sm">MTAA</h6>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </q-page-section>
  </q-page>
</template>

<style scoped lang="scss">
.line {
  width: 800px;
  height: 47px;
  border-bottom: 1px solid black;
  position: absolute;
}

.avatar {
  margin: 0 2rem;
  @media (max-width: $breakpoint-xs) {
    margin: 0 1rem;
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
    font-size: 2rem;
  }
  margin: 0;
  @media (min-width: $breakpoint-sm) {
    margin: 10px;
  }
}

.date-title {
  @media (min-width: $breakpoint-xs) {
    display: inline-block;
    font-size: 3rem;
    margin: 0.5rem;
  }
  font-size: 2rem;
  margin: 0px;
}

.channels_section {
  margin: 10px 0;
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
