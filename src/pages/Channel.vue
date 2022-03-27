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
          <q-card-section
            style="padding-bottom: 0; padding-left: 5px"
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
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
              v-show="channelsExpanded"
            >
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># PKS<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item"><q-btn flat># VPWA</q-btn></li>
              <li class="list-item"><q-btn flat># PIS</q-btn></li>
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># PSI<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item"><q-btn flat># WTECH</q-btn></li>
              <li class="list-item"><q-btn flat># MA</q-btn></li>
              <li class="list-item"><q-btn flat># ADM</q-btn></li>
            </ul>
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
            <h5 style="margin: 0" class="font-weight-bold">#VPWA</h5>
          </q-card-section>
          <q-separator size="1px" color="black" />

          <div class="flex column" style="height: calc(100% - 4.5rem)">
            <q-card-section class="message_section">
              <q-scroll-area style="width: 100%; height: 100%">
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
              </q-scroll-area>
            </q-card-section>

            <q-card-section class="q-py-xs q-ml-md" style="padding-bottom: 0">
              <label class="typing_label">David is typing ...</label>
            </q-card-section>

            <q-card-section
              class="q-py-xs q-px-md col-4 send_section"
              style="padding-top: 0"
            >
              <q-form @submit="sendMessage">
                <q-input
                  rounded
                  outlined
                  v-model="newMessage"
                  placeholder="Enter your message"
                  dense
                  class="full-width"
                >
                  <template v-slot:after>
                    <q-btn
                      type="submit"
                      round
                      dense
                      flat
                      icon="send"
                      @click="sendMessage"
                    />
                  </template>
                </q-input>
              </q-form>
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
          <q-card-section
            style="padding-bottom: 0; padding-left: 5px"
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
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
              v-show="channelsExpanded"
            >
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># PKS<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item"><q-btn flat># VPWA</q-btn></li>
              <li class="list-item"><q-btn flat># PIS</q-btn></li>
              <li class="list-item">
                <q-btn style="padding-right: 30px" flat
                  ># PSI<q-icon
                    name="lock"
                    style="
                      position: absolute;
                      top: 6px;
                      right: 5px;
                      font-size: 20px;
                    "
                /></q-btn>
              </li>
              <li class="list-item"><q-btn flat># WTECH</q-btn></li>
              <li class="list-item"><q-btn flat># MA</q-btn></li>
              <li class="list-item"><q-btn flat># ADM</q-btn></li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

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

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  newMessage: string;
  invitesExpanded: boolean;
  channelsExpanded: boolean;
  userName: string;
  drawerLeft: boolean;
  user_pop: boolean;
  messages: { text: string; from: string }[];
}

export default defineComponent({
  name: 'ChannelLayout',
  data: (): State => {
    return {
      user_pop: false,
      userName: 'David',
      channelsExpanded: true,
      invitesExpanded: true,
      newMessage: '',
      drawerLeft: false,
      messages: [
        {
          text: 'Hey How are you ?',
          from: 'Alice',
        },
        {
          text: 'I am good,  you ?',
          from: 'Bob',
        },
        {
          text: 'I am fine, and what about you @David?',
          from: 'Alice',
        },
      ],
    };
  },

  methods: {
    pop_up() {
      this.user_pop = true;
    },

    toggleChannels() {
      this.channelsExpanded = !this.channelsExpanded;
    },
    toggleInvites() {
      this.invitesExpanded = !this.invitesExpanded;
    },
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          text: this.newMessage,
          from: 'Me',
        });
        this.newMessage = '';
      }
    },
    handleDrawer() {
      console.log(this.drawerLeft);
      this.drawerLeft = !this.drawerLeft;
    },
  },
  computed: {
    channelsIconRotation() {
      return this.channelsExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);';
    },
    invitesIconRotation() {
      return this.invitesExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);';
    },
  },
});
</script>
