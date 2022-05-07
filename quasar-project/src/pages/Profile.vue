<template flex>
  <q-page class="justify-center">
    <div class="text-center">
      <h4 class="q-ma-lg">Your Profile</h4>
      <q-separator> </q-separator>
    </div>
    <div class="row">
      <q-card flat bordered square class="q-pa-lg col-xs-12 col-sm-4 col-lg-3">
        <div class="text-center q-mt-md">
          <q-avatar
            class="q-p-lg"
            size="120px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="person"
          />
          <h4 class="q-mb-md">{{this.active_user}}</h4>
          <div class="">
            <q-btn color="primary" class="q-ma-md"> Change username</q-btn>
            <q-btn color="primary" class="q-ma-md"> Change Password</q-btn>
            <q-btn color="red" class="q-ma-md"> Delete account </q-btn>
            <div>
              <q-checkbox
                v-model="mentionedNotifications"
                label="Recieve notifications only when mentioned"
              />
            </div>
          </div>
        </div>
      </q-card>

      <q-card bordered square flat class="col-xs-12 col-sm-8 col-lg-6">
        <q-card-section class="row justify-center">
          <label class="text-center">JOINED SERVERS</label>
        </q-card-section>

        <q-separator />

        <q-separator />
        <q-scroll-area style="height: 29rem; width: 100%">
          <div class="q-gutter-sm q-ma-xs-xs q-ma-sm-md">
            <div class="row"
              v-for="( channel, index) in joined"
              :key="index"
              @click="setActiveChannel(channel.name)"
              >
              <q-btn class="col-xs-2 col-sm-2" round flat to="/channel">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >{{channel.name}}</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary" @click="showMemebers(channel)"
                  >See all members</q-btn
                >
              </div>

              <q-btn
              v-if="this.$store.state.auth.user?.id === channel.owner_id"
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
                      </div>
        </q-scroll-area>
        <q-separator></q-separator>
      </q-card>

      <q-card bordered square flat class="col-xs-12 col-sm-12 col-lg-3">
        <q-card-section class="row justify-center">
          <label class="text-center">FRIENDS</label>
        </q-card-section>

        <q-separator />

        <q-separator />

        <q-card-section>
          <div class="text-center">
            <q-btn color="green"> Add a friend </q-btn>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
              <div class="gt-xs">
                <q-avatar
                  class="q-p-md"
                  size="50px"
                  font-size="20px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
              <div class="lt-sm">
                <q-avatar
                  class="q-p-lg"
                  size="60px"
                  font-size="25px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
            </q-btn>
            <label class="col-xs-4 col-sm-4 self-center text-center"
              >Alice</label
            >
            <div>
              <span class="q-ma-md q-pa-sm grey-dot"></span>
            </div>

            <div
              class="col-xs-2 col-sm-2 text-center self-center"
              style="margin: 0%"
            ></div>

            <q-btn
              class="col-xs-1 col-sm-2 col-md-1"
              flat
              rounded
              color="red"
              icon="close"
            >
            </q-btn>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <div class="row">
            <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
              <div class="gt-xs">
                <q-avatar
                  class="q-p-md"
                  size="50px"
                  font-size="20px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
              <div class="lt-sm">
                <q-avatar
                  class="q-p-lg"
                  size="60px"
                  font-size="25px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
            </q-btn>
            <label class="col-xs-4 col-sm-4 self-center text-center"
              >Ctibor Kovalčík</label
            >
            <div>
              <span class="q-ma-md q-pa-sm green-dot"></span>
            </div>

            <div
              class="col-xs-2 col-sm-2 text-center self-center"
              style="margin: 0%"
            ></div>

            <q-btn
              class="col-xs-1 col-sm-2 col-md-1"
              flat
              rounded
              color="red"
              icon="close"
            >
            </q-btn>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-dialog v-model="userListModal">
            <q-card class="q-pa-md">
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Members list</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-card-section class="column">
                <q-card-section style="padding-right: 0; padding-left: 0"
                  v-for="(user, index) in this.channelUsers"
                  :key="index"
                  v-ripple
                  >
                  <div class="row" style="min-width: 230px">
                    <div class="gt-xs col-3">
                      <q-avatar
                        class="q-p-md"
                        size="50px"
                        font-size="20px"
                        color="blue"
                        text-color="white"
                        icon="person"
                      />
                    </div>
                    <div class="lt-sm col-4">
                      <q-avatar
                        class="q-p-lg"
                        size="60px"
                        font-size="25px"
                        color="blue"
                        text-color="white"
                        icon="person"
                      />
                    </div>
                    <label class="col-7 self-center text-center">{{user.nickname}}</label>
                    <q-btn class="col-2" flat rounded color="red" icon="close">
                    </q-btn>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { Channel } from '../contracts'

interface State {
  mentionedNotifications: boolean;
  userListModal: boolean;
  active_user: string;
  active_channel: string
}

export default defineComponent({
  name: 'ProfileLayout',
  data: (): State => {
    return {
      mentionedNotifications: false,
      userListModal: false,
      active_user: '',
      active_channel: ''
    }
  },
  methods: {
    async listUsers (channel: string) {
      await this.getChannelUsers(channel)
      this.active_channel = channel
      this.userListModal = true
    },
    showMemebers (channel: Channel) {
      console.log(this.$store.state.channels)
      console.log(this.$store.state.auth)
      this.listUsers(channel.name)
    },
    ...mapActions('channels', ['getChannelUsers', 'isTyping', 'setActiveChannel'])
  },
  computed: {
    currentUserName () {
      return this.$store.state.auth.user?.name
    },
    currentUserSurname () {
      return this.$store.state.auth.user?.surname
    },
    ...mapGetters('channels', {
      channels: 'joinedChannels',
      lastMessageOf: 'lastMessageOf',
      channelsdata: 'channels',
      joined: 'joined',
      invited: 'invited'
    }),
    channelUsers () {
      console.log(this.active_channel)
      return this.$store.state.channels.channelUsers[this.active_channel]
    }
  },
  mounted: function () {
    if (this.currentUserSurname && this.currentUserName) {
      this.active_user = this.currentUserName + ' ' + this.currentUserSurname
    }
  }
})
</script>

<style>
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
</style>
