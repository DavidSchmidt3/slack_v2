<template>
  <q-page class="bg-grey-4 row justify-center items-center">
    <div class="col-12 text-center center">
      <h2>Welcome David Schmidt</h2>
    </div>
    <q-separator />
    <h5>Channels</h5>

    <div class="row text-center center full-width justify-evenly">
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

      <div class="avatar gt-xs">
        <q-btn round to="/channel">
          <q-avatar
            class="q-p-lg q-shadow-4"
            size="120px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="groups"
          />
        </q-btn>
        <div class="row justify-center q-mt-sm">DBS2022</div>
      </div>

      <div class="avatar gt-sm">
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
      <div class="avatar gt-md">
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
  </q-page>
</template>

<style>
.line {
  width: 800px;
  height: 47px;
  border-bottom: 1px solid black;
  position: absolute;
}

.avatar {
  margin: 5rem;
}

.homepage_menu {
  max-width: fit-content;
}
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
