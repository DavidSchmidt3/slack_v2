<template>
  <q-page class="bg-grey-3 row justify-center items-center">
    <q-page-section class="col-12 text-center center">
      <h3 style="margin: 2rem">Welcome {{active_user}}</h3>
      <h4 class="date-title">Today's date:</h4>
      <h4 class="date-title">{{ date }}</h4>
    </q-page-section>
    <q-page-section>
      <q-btn
        @click="channel = true"
        class="q-my-md"
        size="lg"
        text-color="white"
        color="primary"
        label="Add channel"
      />
    </q-page-section>

    <q-dialog v-model="channel">
      <q-card class="q-pa-md">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add channel</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="column">
          <q-input v-model="new_channel" label="Channel name" />
          <q-checkbox v-model="channelPrivate" label="Keep channel private" />
          <q-btn
            class="q-my-md"
            text-color="white"
            color="primary"
            label="Add channel"
            @click="createChannel()"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

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
            style="height: 9rem; margin-top: 3rem">
              <div class="avatar"
              v-for="( channel, index) in invited"
              :key="index"
              @click="setActiveChannel(channel.name)">
              <q-btn round >
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                  @click="joinChannel(channel)"
                />
                <q-icon
                v-if="channel.type == 'private'"
                  name="lock"
                  style="position: absolute; top: -10px; right: -10px"
                />
              </q-btn>

              <h6 class="row justify-center q-mt-sm">{{ channel.name }}</h6>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </q-page-section>

    <q-dialog v-if="accept_invite" v-model="accept_invite">
      <q-card class="q-pa-md">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn
            class="q-my-md"
            text-color="white"
            color="primary"
            label="Accept Invite"
            @click="joinChannel(acceptinvite())"
          />
        </q-card-section>
        </q-card>
    </q-dialog>

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
            style="height: 9rem; margin-top: 3rem">
              <div class="avatar"
              v-for="( channel, index) in joined"
              :key="index"
              @click="setActiveChannel(channel.name)">
              <q-btn round to="/channel">
                <q-avatar
                  class="q-p-md"
                  size="120px"
                  font-size="40px"
                  color="blue"
                  text-color="white"
                  icon="groups"
                />
                <q-icon
                v-if="channel.type == 'private'"
                  name="lock"
                  style="position: absolute; top: -10px; right: -10px"
                />
              </q-btn>

              <h6 class="row justify-center q-mt-sm">{{ channel.name }}</h6>
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

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { Channel, SerializedMessage } from '../contracts'

interface State {
  date: string;
  email: string;
  channelName: string;
  channelPrivate: boolean;
  password: string;
  new_channel: string;
  active_user: string;
  accept_invite: boolean;
  channelname_to_join: Channel | null;
}

export default defineComponent({
  name: 'Home-page',
  data: (): State => {
    return {
      date: new Date().toLocaleString('sk-SK'),
      email: '',
      channelName: '',
      channelPrivate: false,
      password: '',
      new_channel: '',
      active_user: 'David Schmidt',
      accept_invite: false,
      channelname_to_join: null
    }
  },
  methods: {
    joinChannel (channel: Channel) {
      this.channelname_to_join = channel
      this.accept_invite = true
    },

    acceptinvite () {
      this.join(this.channelname_to_join)
      this.accept_invite = false
      console.log(this.accept_invite)
    },
    countTime () {
      this.date = new Date().toLocaleString('sk-SK')
    },
    createChannel () {
      const data =
      {
        name: this.new_channel,
        type: this.channelPrivate
      }
      this.create(data)
    },
    ...mapMutations('channels', {
      setActiveChannel: 'SET_ACTIVE'
    }),
    ...mapActions('auth', ['logout']),
    ...mapActions('channels', ['addMessage']),
    ...mapActions('channels', ['create']),
    ...mapActions('channels', ['join'])
  },
  computed: {
    ...mapGetters('channels', {
      channels: 'joinedChannels',
      lastMessageOf: 'lastMessageOf',
      channelsdata: 'channels',
      joined: 'joined',
      invited: 'invited'
    }),
    activeChannel () {
      return this.$store.state.channels.active
    },
    messages (): SerializedMessage[] {
      return this.$store.getters['channels/currentMessages']
    },
    currentUserName () {
      return this.$store.state.auth.user?.name
    },
    currentUserSurname () {
      return this.$store.state.auth.user?.surname
    }
  },
  mounted: function () {
    if (this.currentUserSurname && this.currentUserName) {
      this.active_user = this.currentUserName + ' ' + this.currentUserSurname
    }
    window.setInterval(() => {
      this.countTime()
    }, 1000)
  }
})
</script>
