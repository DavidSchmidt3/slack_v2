<template>
  <q-page class="row items-center justify-evenly">
    <channel-messages-component :messages="messages" />
  </q-page>
</template>

<script lang="ts">
import ChannelMessagesComponent from '../components/ChannelMessagesComponent.vue'
import { SerializedMessage } from '../contracts'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ChannelMessagesComponent },
  name: 'ChannelPage',
  computed: {
    messages (): SerializedMessage[] {
      return this.$store.getters['channels/currentMessages']
    }
  }
})
</script>
