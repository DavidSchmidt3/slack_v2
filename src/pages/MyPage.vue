<template>
  <q-page
    class="bg-grey window-height window-width row justify-center items-center"
  >
    <div class="">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md text-center">Slack_v2</h5>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg shadow-1 login_card">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input rounded outlined label="Email" v-model="email">
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
                rounded
                outlined
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
          <q-card-actions class="q-px-md">
            <q-btn
              rounded
              unelevated
              color="green"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
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

<style scoped>
.login_card {
  border-radius: 15px;
}
</style>
