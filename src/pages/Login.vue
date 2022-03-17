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
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    />
                  </svg>
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
                  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                    />
                  </svg>
                </q-avatar>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg q-py-none q-pb-xl">
          <q-btn
            rounded
            unelevated
            color="primary"
            class="login_button"
            size="lg"
            label="Login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none q-mt-xl">
          <p class="text-black-6 text-h6">New to Slack_v2?</p>
        </q-card-section>
        <q-card-actions class="q-px-xl q-py-none">
          <q-btn
            rounded
            unelevated
            class="login_button q-px-xs-xl"
            color="primary"
            size="lg"
            label="Register"
          />
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
