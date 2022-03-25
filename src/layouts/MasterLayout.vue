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
          <q-btn class="q-pa-xs" flat to="/profile">
            <q-avatar class="q-ma-sm" size="50px" color="blue" icon="person">
            </q-avatar>

            <div class="text-subtitle1 q-mr-md">Dávid Schmidt</div>
          </q-btn>

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
</style>
