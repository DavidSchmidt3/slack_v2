<template>
  <q-page>
    <header class="text-center q-my-sm">
      <q-avatar
        icon="expand_more"
        font-size="25px"
        color="primary"
        text-color="white"
        size="30px"
      />
    </header>

    <div class="row channel_page">
      <div class="col-xs-4 col-lg-2">
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
                <b>FIIT</b>
              </div>
            </div>
          </q-card-section>
          <q-separator size="1px" color="black" />
          <q-card-section
            style="padding-bottom: 0"
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
            <h6 class="q-ma-sm">Channels</h6>
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
            style="padding-bottom: 0; padding-top: 0"
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
            <h6 class="q-ma-sm">Direct messages</h6>
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

      <div class="col-xs-8 col-lg-10">
        <q-card flat square bordered style="height: 100%">
          <q-card-section class="channel_header">
            <!-- <q-avatar
              class="q-p-lg q-mr-md"
              size="40px"
              font-size="20px"
              color=""
              text-color="white"
              icon=""
            /># Channel 1 -->
            <h5><b>#VPWA</b></h5>
          </q-card-section>
          <q-separator size="1px" color="black" />

          <div style="height: 100%" class="flex column">
            <q-card-section class="col-10">
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

            <q-card-section class="q-pa-md col-1">
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
                    <q-btn type="submit" round dense flat icon="send" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
          </div>
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

.channel_header {
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.list-item {
  margin: 0;
}

.channel_page {
  height: calc(100vh - 120px);
}
</style>

<script>
export default {
  data() {
    return {
      channelsExpanded: true,
      messagesExpanded: true,
      newMessage: '',
      messages: [
        {
          text: 'Hey How are you ?',
          from: 'Haaaaary',
        },
        {
          text: 'I am good,  you ?',
          from: 'Marffff',
        },
        {
          text: 'Okay',
          from: 'Haaaaary',
        },
        {
          text: 'dovidenia ok',
          from: 'Marfffff',
        },
        {
          text: 'Okay',
          from: 'Haaaaary',
        },
        {
          text: 'dovidenia ok',
          from: 'Marfffff',
        },
        {
          text: 'Okay',
          from: 'Haaaaary',
        },
        {
          text: 'dovidenia ok',
          from: 'Marfffff',
        },
        {
          text: 'Okay',
          from: 'Haaaaary',
        },
        {
          text: 'dovidenia ok',
          from: 'Marfffff',
        },
        {
          text: 'Okay',
          from: 'Haaaaary',
        },
        {
          text: 'dovidenia ok',
          from: 'Marfffff',
        },
      ],
    };
  },
  methods: {
    toggleChannels() {
      this.channelsExpanded = !this.channelsExpanded;
    },
    toggleMessages() {
      this.messagesExpanded = !this.messagesExpanded;
    },
  },
  computed: {
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
};
</script>
