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
          <div v-if="userStatus === 'online'">
            <q-btn flat rounded class="status" @click="icon = true">
              <span class="green-dot"></span>
            </q-btn>
          </div>
          <div v-else-if="userStatus === 'dnd'">
            <q-btn flat rounded class="status" @click="icon = true">
              <span class="red-dot"></span>
            </q-btn>
          </div>
          <div v-else>
            <q-btn flat rounded class="status" @click="icon = true">
              <span class="grey-dot"></span>
            </q-btn>
          </div>

          <q-btn class="q-pa-xs" flat to="/profile">
            <q-avatar class="q-ma-sm" size="50px" color="blue" icon="person">
            </q-avatar>

            <div class="text-subtitle1 q-mr-md">{{ this.currentUser }}</div>
          </q-btn>

          <q-dialog v-model="icon">
            <q-card>
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Set your status</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-card-section class="column">
                <q-radio
                  keep-color
                  v-model="userStatus"
                  :change="statusColor"
                  val="online"
                  label="Online"
                  color="green"
                />
                <q-radio
                  keep-color
                  v-model="userStatus"
                  val="dnd"
                  label="Do not Disturb"
                  color="red"
                />
                <q-radio
                  keep-color
                  v-model="userStatus"
                  val="offline"
                  label="Offline"
                  color="grey"
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

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

interface State {
  icon: Ref<boolean>,
  bar: Ref<boolean>,
  bar2: Ref<boolean>,
  toolbar: Ref<boolean>,
  userStatus: Ref<string>,
}

export default defineComponent({
  name: 'ChatLayout',
  setup (): State {
    return {
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      userStatus: ref('online')
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      message: '',
      loading: false
    }
  },
  computed: {
    ...mapGetters('channels', {
      channels: 'joinedChannels',
      lastMessageOf: 'lastMessageOf',
      getNotification: 'getNotification',
      showNotification: 'showNotification'
    }),
    activeChannel () {
      return this.$store.state.channels.active
    },
    currentUser () {
      return this.$store.state.auth.user?.nickname
    }
  },
  methods: {
    async send () {
      this.loading = true
      await this.addMessage({ channel: this.activeChannel, message: this.message })
      this.loading = false
    },
    statusColor (e: Event) {
      console.log(e)
    },
    ...mapMutations('channels', {
      setActiveChannel: 'SET_ACTIVE'
    }),
    disableNotifications () {
      this.$store.commit('channels/DISABLE_NOTIFICATION')
    },
    ...mapActions('auth', ['logout']),
    ...mapActions('channels', ['addMessage'])
  },
  watch: {
    showNotification: {
      deep: true,
      handler (showNotification) {
        if ((this.activeChannel === this.getNotification.channel) || showNotification === false) {
          return
        }
        this.disableNotifications()
        const notifyString = `Channel: ${this.getNotification.channel}, Author: ${this.getNotification.author}, Message: ${this.getNotification.message.substring(0, 10)}`
        this.$q.notify({
          message: notifyString,
          position: 'top'
        })
      }
    }
  }

})
</script>

<style scoped lang="scss">
.text-subtitle1 {
  @media (max-width: $breakpoint-xs) {
    display: none;
  }
}

.green-dot {
  height: 25px;
  width: 25px;

  background-color: green;
  border-radius: 50%;
  display: inline-block;
}

.red-dot {
  height: 25px;
  width: 25px;

  background-color: red;
  border-radius: 50%;
  display: inline-block;
}

.grey-dot {
  height: 25px;
  width: 25px;

  background-color: rgb(121, 119, 117);
  border-radius: 50%;
  display: inline-block;
}

.status {
  margin: 0;
  padding: 0;
}
</style>
