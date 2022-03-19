<template>
  <q-page
    class="bg-grey-4 window-height window-width row justify-center items-center"
  >
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Slack_v2</q-toolbar-title>

        <q-btn flat round dense icon="person">
          <q-menu class="homepage_menu" style="width: 150px">
            <div class="row no-wrap q-pa-md homepage_menu">
              <div class="column items-center">
                <q-avatar size="72px" color="blue"> </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs q-p-lg">
                  David Schmidt
                </div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  to="/login"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <div class="col-12 text-center center">
      <h2>Welcome David Schmidt</h2>
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
