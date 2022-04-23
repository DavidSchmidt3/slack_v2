<template>
  <q-page>
    <div v-show="!drawerLeft" class="row channel_page">
      <div class="col-xs-4 col-lg-3 col-xl-2 gt-xs">
        <q-card
          flat
          bordered
          square
          class="height-full"
          style="max-height: 100%; height: 100%"
        >
          <q-card-section style="padding-bottom: 0">
            <q-page-section>
              <q-btn
                @click="members = true"
                class="q-my-md"
                text-color="white"
                color="primary"
                label="Add member"
              />
            </q-page-section>

            <q-dialog v-model="members">
              <q-card class="q-pa-md">
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Add member</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="column">
                  <q-input v-model="memberEmail" label="Member Email" />
                  <q-btn
                    @click="members = false"
                    class="q-my-md"
                    text-color="white"
                    color="primary"
                    label="Add member"
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
          </q-card-section>
          <q-card-section
            style="padding-bottom: 0; padding-top: 0; padding-left: 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleInvites">
              <q-avatar
                :style="invitesIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Invites</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px; padding-bottom: 0">
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
              v-show="invitesExpanded"
            >
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># FIIT<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item">
                <q-btn class="text-weight-bolder" flat># DBS 2022</q-btn>
              </li>
            </ul>
          </q-card-section>
          <q-card-section
            style="padding: 0 0 0 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleChannels">
              <q-avatar
                :style="channelsIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Channels</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px; padding-bottom: 0">
             <q-list class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
              v-show="channelsExpanded">
            <q-item
              v-for="(channel, index) in channels"
              :key="index"
              clickable
              v-ripple
              @click="setActiveChannel(channel)"
            >
              <q-item-section>
                <q-item-label lines="1">
                  {{ channel }}
                </q-item-label>
                <q-item-label class="conversation__summary" caption>
                  {{ lastMessageOf(channel)?.content || '' }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="keyboard_arrow_down" />
              </q-item-section>
            </q-item>
          </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-8 col-lg-9 col-xl-10">
        <q-card flat square bordered style="height: 100%">
          <q-card-section
            class="flex items-center"
            style="height: 72px; align-content: center"
          >
            <div class="lt-sm">
              <q-btn
                style="font-size: 20px; size: 30px"
                icon="chevron_right"
                class="self-center"
                round
                flat
                @click="handleDrawer"
              />
            </div>
            <h5 style="margin: 0" class="font-weight-bold">{{ activeChannel }}</h5>
          </q-card-section>
          <q-separator size="1px" color="black" />

          <div class="flex column" style="height: calc(100% - 4.5rem)">
            <q-card-section class="message_section">
              <!-- <q-scroll-area style="width: 100%; height: 100%">
                <div style="width: 100%">
                  <q-chat-message
                    v-for="(message, index) in messages"
                    :key="index"
                    :style="{
                      fontWeight: message.text.includes(`@${userName}`)
                        ? 800
                        : 400,
                    }"
                    :text="[message.text]"
                  >
                    <template v-slot:name
                      ><q-btn
                        @click="pop_up"
                        class="button_popup"
                        no-caps
                        flat
                        dense
                        style="padding: 0"
                      >
                        <label class="label_name">{{ message.from }}</label>
                      </q-btn>
                      <q-dialog v-model="user_pop">
                        <q-card
                          flat
                          bordered
                          square
                          class="q-pa-lg col-xs-12 col-sm-4 col-lg-3"
                        >
                          <div class="text-center q-mt-md">
                            <q-avatar
                              class="q-p-lg"
                              size="120px"
                              font-size="40px"
                              color="blue"
                              text-color="white"
                              icon="person"
                            />
                            <h4 class="q-mb-md">{{ message.from }}</h4>
                            <q-separator> </q-separator>
                            <h5>Currently typing :</h5>
                            <p>I was thinking about lunch with you guys</p>
                          </div>
                        </q-card>
                      </q-dialog>
                    </template>
                  </q-chat-message>
                </div>
              </q-scroll-area> -->
              <q-scroll-area ref="area" style="width: 100%; height: calc(100vh - 150px)">
                <div style="width: 100%; max-width: ; margin: 0 auto;">
                  <q-chat-message v-for="message in messages"
                    :key="message.id"
                    :name="message.author.nickname"
                    :text="[message.message]"
                    :stamp="message.createdAt"
                    :sent="isMine(message)"
                  />
                </div>
              </q-scroll-area>
            </q-card-section>

            <q-card-section class="q-py-xs q-ml-md" style="padding-bottom: 0">
              <label class="typing_label">David is typing ...</label>
            </q-card-section>

            <q-card-section
              class="q-py-xs q-px-md col-4 send_section"
              style="padding-top: 0"
            >
              <q-toolbar class="bg-grey-3 text-black row">
                 <q-input v-model="message" :disable="loading" @keydown.enter.prevent="send" rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" placeholder="Type a message" />
              <q-btn :disable="loading" @click="send" round flat icon="send" />
             </q-toolbar>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>

    <div v-show="drawerLeft" class="lt-sm">
      <div class="full-width">
        <q-card
          flat
          bordered
          square
          class="height-full"
          style="max-height: 100%; height: 100%"
        >
          <q-card-section
            class="flex items-center"
            style="height: 72px; align-content: center"
          >
            <div class="lt-sm">
              <q-btn
                style="font-size: 20px; size: 30px"
                icon="chevron_left"
                class="self-center"
                round
                flat
                @click="handleDrawer"
              />
            </div>
            <h5 style="margin: 0" class="text-weight-bold">FIIT</h5>
          </q-card-section>

          <q-separator size="1px" color="black" />
          <q-card-section style="padding-bottom: 0">
            <q-page-section>
              <q-btn
                @click="members = true"
                class="q-my-md"
                text-color="white"
                color="primary"
                label="Add member"
              />
            </q-page-section>

            <q-dialog v-model="members">
              <q-card class="q-pa-md">
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Add member</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="column">
                  <q-input v-model="memberEmail" label="Member Email" />
                  <q-btn
                    @click="members = false"
                    class="q-my-md"
                    text-color="white"
                    color="primary"
                    label="Add member"
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
          </q-card-section>
          <q-card-section
            style="padding-bottom: 0; padding-top: 0; padding-left: 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleInvites">
              <q-avatar
                :style="invitesIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Invites</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px; padding-bottom: 0">
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
              v-show="invitesExpanded"
            >
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># FIIT<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item">
                <q-btn class="text-weight-bolder" flat># DBS 2022</q-btn>
              </li>
            </ul>
          </q-card-section>
          <q-card-section
            style="padding: 0 0 0 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleChannels">
              <q-avatar
                :style="channelsIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Channels</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px; padding-bottom: 0">
            <q-list>
            <q-item
              v-for="(channel, index) in channels"
              :key="index"
              clickable
              v-ripple
              @click="setActiveChannel(channel)"
            >
              <q-item-section>
                <q-item-label lines="1">
                  {{ channel }}
                </q-item-label>
                <q-item-label class="conversation__summary" caption>
                  {{ lastMessageOf(channel)?.content || '' }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <!--q-item-label caption>
                  {{ channel }}
                </q-item-label-->
                <q-icon name="keyboard_arrow_down" />
              </q-item-section>
            </q-item>
          </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { QScrollArea } from 'quasar'
import { SerializedMessage } from '../contracts'
import { mapActions, mapMutations, mapGetters } from 'vuex'

interface State {
  newMessage: string;
  invitesExpanded: boolean;
  channelsExpanded: boolean;
  memberEmail: string;
  members: boolean;
  userName: string;
  message: string;
  drawerLeft: boolean;
  user_pop: boolean;
  loading: boolean;
}

export default defineComponent({
  name: 'ChannelPage',
  data: (): State => {
    return {
      user_pop: false,
      userName: "David",
      members: false,
      channelsExpanded: true,
      invitesExpanded: true,
      memberEmail: '',
      message: '',
      newMessage: '',
      drawerLeft: false,
      loading: false
    }
  },

  methods: {
    pop_up () {
      this.user_pop = true
    },
    toggleChannels () {
      this.channelsExpanded = !this.channelsExpanded
    },
    toggleInvites () {
      this.invitesExpanded = !this.invitesExpanded
    },
    handleDrawer () {
      this.drawerLeft = !this.drawerLeft
    },
    async send () {
      this.loading = true
      await this.addMessage({ channel: this.activeChannel, message: this.message })
      this.message = ''
      this.loading = false
    },
    scrollMessages () {
      const area = this.$refs.area as QScrollArea
      area && area.setScrollPercentage('vertical', 1.1)
    },
    isMine (message: SerializedMessage): boolean {
      return message.author.id === this.currentUser
    },
    ...mapMutations('channels', {
      setActiveChannel: 'SET_ACTIVE'
    }),
    ...mapActions('auth', ['logout']),
    ...mapActions('channels', ['addMessage'])
  },
  computed: {
    ...mapGetters('channels', {
      channels: 'joinedChannels',
      lastMessageOf: 'lastMessageOf'
    }),
    channelsIconRotation () {
      return this.channelsExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);'
    },
    invitesIconRotation () {
      return this.invitesExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);'
    },
    activeChannel () {
      return this.$store.state.channels.active
    },
    messages (): SerializedMessage[] {
      return this.$store.getters['channels/currentMessages']
    },
    currentUser () {
      return this.$store.state.auth.user?.id
    }
  },
  watch: {
    messages: {
      handler () {
        this.$nextTick(() => this.scrollMessages())
      },
      deep: true
    }
  }
})
</script>

<style scoped lang="scss">
.label_name {
  &:hover {
    cursor: pointer;
  }
}
.server_name {
  font-size: 25px;
  align-self: center;
}

.server_name_section {
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.avatar {
  margin: 1rem 2rem;
}
.channel_header {
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.list-item {
  margin: 0;
}

.section_title {
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
}
.channel_page {
  height: calc(100vh - 120px);
}

.message_section {
  height: calc(100% - 5.4rem);
  padding-bottom: 0;
}

.typing_label {
  font-size: 11px;
  font-weight: 100;
}

.send_section {
  height: 3.5rem;
}
</style>
