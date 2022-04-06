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
              v-model="credentials.email"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="icons/user.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-input
              outlined
              class="custom_input text-center"
              rounded
              type="password"
              label="Password"
              v-model="credentials.password"
            >
              <template v-slot:append>
                <q-avatar>
                  <img src="icons/lock.svg" />
                </q-avatar>
              </template>
            </q-input>
            <q-card-actions class="q-px-lg q-py-none q-pb-xl">
              <q-btn
                type="submit"
                value="Submit"
                rounded
                unelevated
                color="primary"
                class="login_button"
                size="lg"
                label="Login"
                @click.prevent="onSubmit"
              />
            </q-card-actions>
            <q-card-section style="padding: 0; margin: 0">
              <p
                class="text-center q-m-none q-p-none"
                v-for="error of v$.$errors"
                :key="error.$uid"
              >
                <strong>{{ error.$message }}</strong>
              </p>
            </q-card-section>
          </q-form>
        </q-card-section>

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

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { defineComponent } from 'vue'
import { minLength, required, email, helpers } from '@vuelidate/validators'
import { RouteLocationRaw } from 'vue-router'

interface State {
  credentials: {
    email: string;
    password: string;
  };
}

export default defineComponent({
  name: 'Login-page',
  setup: () => ({ v$: useVuelidate({ $autoDirty: true }) }),
  data: (): State => {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    redirectTo (): RouteLocationRaw {
      return { name: 'home' }
    },
    loading (): boolean {
      return this.$store.state.auth.status === 'pending'
    }
  },
  validations () {
    return {
      credentials: {
        email: {
          required: helpers.withMessage('Email is required', required),
          email: helpers.withMessage('Email is not valid', email)
        },
        password: {
          required: helpers.withMessage('Password is required', required),
          minLength: helpers.withMessage(
            'Password must be at least 8 characters long',
            minLength(8)
          )
        }
      }

    }
  },
  methods: {
    async onSubmit () {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        this.$store.dispatch('auth/login', this.credentials).then(() => this.$router.push(this.redirectTo)).catch((err) => this.$q.nofity)
      } else {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: 'Please fill in all the fields'
        })
      }
    }
  }
})
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
