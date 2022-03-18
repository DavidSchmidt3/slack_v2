<template>
  <q-page
    class="bg-grey-4 q-pa-md window-width row justify-center items-center"
  >
    <div class="">
      <q-card
        bordered
        class="q-px-xs-none q-px-sm-xl q-pb-lg shadow-2 register_card"
      >
        <q-card-section class="q-pb-lg">
          <h5
            class="text-center register_title text-black-6 text-weight-bold text-h4"
          >
            Register
          </h5>
          <q-form class="q-gutter-y-md">
            <div class="row flex-center">
              <q-input
                rounded
                outlined
                class="custom_input col-md-6 col-xs-12 q-pr-xs-sm q-pr-md-none"
                label="Email"
                v-model="email"
              >
                <template v-slot:append>
                  <q-avatar>
                    <img src="../assets/images/user.svg" />
                  </q-avatar>
                </template>
              </q-input>
            </div>

            <div class="row justify-between">
              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
                <q-input
                  outlined
                  class="custom_input text-center"
                  rounded
                  type="text"
                  label="Name"
                  v-model="name"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="../assets/images/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="text-center col-xs-12 col-md-6 q-gutter-x-sm">
                <q-input
                  outlined
                  class="custom_input text-center"
                  rounded
                  type="text"
                  label="Surname"
                  v-model="surname"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="../assets/images/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="row justify-between">
              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
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
              </div>

              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-gutter-y-md"
              >
                <q-input
                  outlined
                  class="custom_input text-center"
                  rounded
                  type="password"
                  label="Password again"
                  v-model="password2"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="../assets/images/lock.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg q-py-none q-pb-xl">
          <q-btn
            rounded
            unelevated
            color="primary"
            class="register_button"
            size="lg"
            label="Register"
          />
        </q-card-actions>

        <q-card-section class="text-center q-pa-none q-mt-xl">
          <p class="text-black-6 text-h6">Already registered?</p>
        </q-card-section>
        <q-card-actions class="q-px-xl q-py-none">
          <q-btn
            rounded
            unelevated
            class="register_button q-px-xs-xl"
            color="primary"
            size="lg"
            label="Login"
            to="/login"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      surname: '',
      password2: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.register_card {
  @media (min-width: $breakpoint-sm) {
    width: 65vw;
  }
  @media (min-width: $breakpoint-md) {
    width: 50vw;
  }
  @media (min-width: $breakpoint-lg) {
    width: 40vw;
  }
  border-radius: 15px;
}

.register_title {
  margin-top: 30px;
  margin-bottom: 40px;
}

.register_button {
  width: 180px;
  margin: 0 auto;
}
</style>
