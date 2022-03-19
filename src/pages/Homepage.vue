<template>
  <q-page
    class="bg-grey-4 window-height window-width row justify-center items-center"
  >
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Slack_v2</q-toolbar-title>
        <q-btn flat round dense icon="person" />
      </q-toolbar>
    </q-header>

    <div class="col-12 text-center center">
      <h2>Vitaj David Schimdt</h2>
    </div>

    <div class="col-12 text-center center"><h5>Channels</h5></div>

    <div class="row q-gutter-xl text-center center">
      <div class="avatar lt-gt-xs">
        <q-btn round>
          <q-avatar
            class="q-p-lg"
            size="140px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="groups"
          />
        </q-btn>
      </div>

      <div class="avatar gt-xs">
        <q-btn round>
          <q-avatar
            class="q-p-lg"
            size="140px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="groups"
          />
        </q-btn>
      </div>

      <div class="avatar gt-sm">
        <q-btn round>
          <q-avatar
            class="q-p-lg"
            size="140px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="groups"
          />
        </q-btn>
      </div>
      <div class="avatar gt-md">
        <q-btn round>
          <q-avatar
            class="q-p-lg"
            size="140px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="groups"
          />
        </q-btn>
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
  setup() {
    return {
      heavyList,
    };
  },
};

const maxSize = 20;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: i + 1,
    avatar: i % 5 === 0,
  });
}
</script>
