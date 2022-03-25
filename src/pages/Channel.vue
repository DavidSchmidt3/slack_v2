<template>
  <q-page>
    <header class="text-center q-my-sm">
      <q-btn round flat v-on:click="toggleServersView">
        <q-avatar
          icon="expand_more"
          :style="serversIconRotation"
          font-size="17px"
          color="primary"
          text-color="white"
          size="30px"
        />
      </q-btn>
    </header>

    <div
      v-show="serversExpanded"
      class="flex column text-center center justify-evenly channels q-mb-md"
      style="height: 100%"
    >
      <q-scroll-area style="height: 12rem; width: 100%">
        <div class="row no-wrap text-center flex justify-center">
          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">FIIT-server</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">DBS 2022</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">MTAA</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">VPWA</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">FIIT-server_2</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">DBS 2022</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">MTAA</div>
          </div>

          <div class="avatar">
            <q-btn round to="/channel">
              <q-avatar
                class="q-p-md"
                size="120px"
                font-size="40px"
                color="blue"
                text-color="white"
                icon="groups"
              />
            </q-btn>
            <div class="row justify-center q-mt-sm">VPWA</div>
          </div>
        </div>
      </q-scroll-area>
    </div>

    <!-- TODO:  -->
    <div v-show="!drawerLeft" class="row channel_page">
      <div class="col-xs-4 col-lg-3 col-xl-2 gt-xs">
        <q-card
          flat
          bordered
          square
          class="height-full"
          style="max-height: 100%; height: 100%"
        >
          <q-card-section class="server_name_section">
            <div class="row">
              <q-avatar
                class="q-p-lg q-mr-md"
                size="50px"
                font-size="30px"
                color="primary"
                text-color="white"
                icon="groups"
              />
              <div class="col server_name">
                <b>FIIT-big</b>
              </div>
            </div>
          </q-card-section>

          <q-separator size="1px" color="black" />
          <q-card-section
            style="padding-bottom: 0; padding-left: 5px"
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
              <li class="list-item"><q-btn flat># Channel 1</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 2</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 3</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 4</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 5</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 6</q-btn></li>
            </ul>
          </q-card-section>
          <q-card-section
            style="padding-bottom: 0; padding-top: 0; padding-left: 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleMessages">
              <q-avatar
                :style="messagesIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Direct messages</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px">
            <ul
              v-show="messagesExpanded"
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
            >
              <li class="list-item">
                <q-btn no-caps flat>Ctibor Kovalčík</q-btn>
              </li>
              <li class="list-item">
                <q-btn no-caps flat>Dávid Schmidt</q-btn>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-8 col-xl-10">
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
            <h5 style="margin: 0"><b>#VPWA</b></h5>
          </q-card-section>
          <q-separator size="1px" color="black" />

          <div class="flex column" style="height: calc(100% - 4.5rem)">
            <q-card-section class="message_section">
              <q-scroll-area style="width: 100%; height: 100%">
                <div style="width: 100%">
                  <q-chat-message
                    v-for="message in messages"
                    :key="message.text"
                    :name="message.from"
                    :text="[message.text]"
                  />
                </div>
              </q-scroll-area>
            </q-card-section>

            <q-card-section class="q-py-xs q-px-md col-3 send_section">
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
            <h5 style="margin: 0"><b>FIIT</b></h5>
          </q-card-section>

          <q-separator size="1px" color="black" />
          <q-card-section
            style="padding-bottom: 0; padding-left: 5px"
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
              <li class="list-item"><q-btn flat># Channel 1</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 2</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 3</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 4</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 5</q-btn></li>
              <li class="list-item"><q-btn flat># Channel 6</q-btn></li>
            </ul>
          </q-card-section>
          <q-card-section
            style="padding-bottom: 0; padding-top: 0; padding-left: 5px"
            class="flex justify-start items-center channel_list q-mb-sm"
          >
            <q-btn round flat v-on:click="toggleMessages">
              <q-avatar
                :style="messagesIconRotation"
                icon="expand_more"
                font-size="14px"
                color="primary"
                text-color="white"
                size="28px"
              />
            </q-btn>
            <h6 class="q-my-sm q-mx-xs section_title">Direct messages</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px">
            <ul
              v-show="messagesExpanded"
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
            >
              <li class="list-item">
                <q-btn no-caps flat>Ctibor Kovalčík</q-btn>
              </li>
              <li class="list-item">
                <q-btn no-caps flat>Dávid Schmidt</q-btn>
              </li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
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
  height: calc(100% - 3.5rem);
  padding-bottom: 0;
}
.send_section {
  height: 3.5rem;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  newMessage: string;
  serversExpanded: boolean;
  channelsExpanded: boolean;
  messagesExpanded: boolean;
  drawerLeft: boolean;
  messages: { text: string; from: string }[];
}

export default defineComponent({
  name: 'ChannelLayout',
  data: (): State => {
    return {
      serversExpanded: false,
      channelsExpanded: true,
      messagesExpanded: true,
      newMessage: '',
      drawerLeft: false,
      messages: [
        {
          text: 'Hey How are you ?',
          from: 'Haaaaary',
        },
        {
          text: 'I am good,  you ?',
          from: 'Marffff',
        },
      ],
    };
  },

  methods: {
    toggleServersView() {
      this.serversExpanded = !this.serversExpanded;
    },
    toggleChannels() {
      this.channelsExpanded = !this.channelsExpanded;
    },
    toggleMessages() {
      this.messagesExpanded = !this.messagesExpanded;
    },
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me',
      });
      this.newMessage = '';
    },
    handleDrawer() {
      console.log(this.drawerLeft);
      this.drawerLeft = !this.drawerLeft;
    },
  },
  computed: {
    serversIconRotation() {
      return this.serversExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);';
    },
    channelsIconRotation() {
      return this.channelsExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);';
    },
    messagesIconRotation() {
      return this.messagesExpanded
        ? 'transform: rotate(180deg);'
        : 'transform: rotate(0deg);';
    },
  },
});
</script>
