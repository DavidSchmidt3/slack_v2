<template>
  <q-page
    class="bg-grey-4 window-height window-width row justify-center items-center"
  >
    <div class="">
      <q-card
        bordered
        class="q-px-xs-none q-px-sm-xl q-pb-lg shadow-2 login_card"
      >
        <q-card-section class="q-pb-lg">
          <h5
            class="text-center login_title text-black-6 text-weight-bold text-h4"
          >
            Login
          </h5>
          <q-form class="q-gutter-md">
            <q-input
              rounded
              outlined
              class="custom_input"
              label="Email"
              v-model="email"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="../assets/images/user.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input
              outlined
              class="custom_input text-center"
              rounded
              type="password"
              label="Password"
              v-model="password"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="../assets/images/lock.svg" />
                </q-avatar>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg q-py-none q-pb-xl">
          <q-btn rounded unelevated color="primary" class="login_button"
          size="lg" label="Login" to = /homepage />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none q-mt-xl">
          <p class="text-black-6 text-h6">New to Slack_v2?</p>
        </q-card-section>
        <q-card-actions class="q-px-xl q-py-none">
          <q-btn rounded unelevated class="login_button q-px-xs-xl"
          color="primary" size="lg" label="Register" to = /register />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.login_card {
  border-radius: 15px;
}

.login_title {
  margin-top: 30px;
  margin-bottom: 40px;
}

.login_button {
  width: 180px;
  margin: 0 auto;
}

.custom_input {
  @media (min-width: $breakpoint-xs) {
    width: 300px;
  }
}
</style>
