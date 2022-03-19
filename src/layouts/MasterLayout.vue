<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>Slack_v2</q-toolbar-title>
          <q-avatar class="q-ma-sm" size="50px" color="blue" icon="person">
          </q-avatar>

          <div class="text-subtitle1 q-mr-md">Dávid Schmidt</div>

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
