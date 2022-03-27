<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title class="q-ml-xs-xs q-ml-md-md">
            <q-btn flat to="/homepage">
              <q-toolbar-title>Slack_v2</q-toolbar-title></q-btn
            >
          </q-toolbar-title>
          <q-btn flat rounded class="status" @click="icon = true">
            <span class="dot"> </span>
          </q-btn>
          <q-btn class="q-pa-xs" flat>
            <q-avatar class="q-ma-sm" size="50px" color="blue" icon="person">
            </q-avatar>

            <div class="text-subtitle1 q-mr-md">David</div>
          </q-btn>

          <q-dialog v-model="icon">
            <q-card>
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Close icon</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-card-section class="column">
                <q-radio
                  keep-color
                  v-model="status_user"
                  val="online"
                  label="Online"
                  color="green"
                  @input="status_colour"
                />
                <q-radio
                  keep-color
                  v-model="status_user"
                  val="do_not_disturb"
                  label="Do not Disturb"
                  @onclik="status_colour"
                  @select="status_colour"
                  color="red"
                />
                <q-radio
                  keep-color
                  v-model="status_user"
                  val="offline"
                  label="Offline"
                  color="grey"
                />
                <q-radio
                  keep-color
                  v-model="status_user"
                  val="Away"
                  label="Away"
                  color="yellow"
                />
              </q-card-section>
            </q-card>
          </q-dialog>

          <q-btn
            class="position-right"
            color="negative"
            size="md"
            icon="logout"
            v-close-popup
            to="/login"
          />
        </q-toolbar>
      </q-header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.text-subtitle1 {
  @media (max-width: $breakpoint-xs) {
    display: none;
  }
}

.dot {
  height: 25px;
  width: 25px;

  background-color: rgb(109, 236, 24);
  border-radius: 50%;
  display: inline-block;
}

.status {
  margin: 0;
  padding: 0;
}
</style>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      status_user: ref('line'),
    };
  },
  methods: {
    status_colour(e) {
      console.log('HUJC');
    },
  },
};
</script>
