<template>
  <q-page
    class="my_color q-pa-md window-width row justify-center items-center"
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
          <q-form class="q-gutter-y-md" @submit.stop="onSubmit">
            <div class="row justify-between">
              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
                <q-input
                  name="email"
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  label="Email"
                  outlined
                  class="custom_input text-center q-ma-sm"
                  rounded
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="icons/email.svg" />
                    </q-avatar>
                  </template>
                </q-input>
                <!-- <p
                  class="text-center"
                  v-for="error of v$.$errors"
                  :key="error.$uid"
                >
                  <strong v-if="error.$property === email">email napiču</strong>
                  <strong>{{ v$.$errors }} : </strong>
                  <strong>{{ error.$message }}</strong>
                </p> -->
              </div>
              <div class="text-center col-xs-12 col-md-6 q-gutter-x-sm">
                <q-input
                  outlined
                  class="custom_input text-center q-ma-sm"
                  rounded
                  type="text"
                  label="Nickname"
                  v-model="form.nickname"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="row justify-between q-mt-none">
              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
                <q-input
                  outlined
                  class="custom_input text-center q-ma-sm"
                  rounded
                  type="text"
                  label="Name"
                  v-model="form.name"
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
              <div class="text-center col-xs-12 col-md-6 q-gutter-x-sm">
                <q-input
                  id="surname"
                  name="surname"
                  v-model="form.surname"
                  class="custom_input text-center q-ma-sm"
                  rounded
                  label="Surname"
                  outlined
                >
                  <template v-slot:append>
                    <q-avatar>
                      <img src="icons/user.svg" />
                    </q-avatar>
                  </template>
                </q-input>
              </div>
            </div>

            <div class="row justify-between q-mt-none">
              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
                <q-input
                  id="password"
                  name="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  class="custom_input text-center q-ma-sm"
                  rounded
                  label="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="showPassword ? 'visibility' : 'visibility_off'"
                      class="cursor-pointer "
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </q-input>
              </div>

              <div
                class="text-center col-xs-12 col-md-6 q-gutter-x-sm q-pb-xs-md q-pb-md-none"
              >
                <q-input
                  id="password_confirmation"
                  name="password_confirmation"
                  v-model="form.passwordConfirmation"
                  label="Confirm Password"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  class="custom_input text-center q-ma-sm"
                  rounded
                >
                  <template v-slot:append>
                    <q-icon
                      :name="showPassword ? 'visibility' : 'visibility_off'"
                      class="cursor-pointer"
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            <q-card-actions class="q-px-lg q-py-none q-pb-md">
              <q-btn
                rounded
                unelevated
                color="primary"
                value="Submit"
                class="register_button"
                size="lg"
                :loading="false"
                label="Register"
                type="submit"
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

        <q-card-section class="text-center q-pa-none q-mt-sm">
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
            to="login"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationRaw } from 'vue-router'
import { minLength, required, email, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

interface State {
  form: {
    email: string
    password: string
    passwordConfirmation: string
    name: string
    surname: string
    nickname: string
  }
  showPassword: boolean;
}

export default defineComponent({
  name: 'RegisterPage',
  setup: () => ({ v$: useVuelidate({ $autoDirty: true }) }),
  data: (): State => {
    return {
      form: { email: '', password: '', passwordConfirmation: '', name: '', surname: '', nickname: '' },
      showPassword: false
    }
  },
  computed: {
    redirectTo (): RouteLocationRaw {
      return { name: 'login' }
    },
    loading (): boolean {
      return this.$store.state.auth.status === 'pending'
    }
  },
  validations () {
    return {
      form: {
        name: {
          required: helpers.withMessage('Name is required', required),
          minLength: helpers.withMessage(
            'Name must be at least 3 characters long',
            minLength(3)
          )
        },
        surname: {
          required: helpers.withMessage('Surname is required', required),
          minLength: helpers.withMessage(
            'Surname must be at least 3 characters long',
            minLength(3)
          )
        },
        email: {
          required: helpers.withMessage('Email is required', required),
          email: helpers.withMessage('Email is not valid', email)
        },
        nickname: {
          required: helpers.withMessage('Nickname is required', required),
          minLength: helpers.withMessage(
            'Nickname must be at least 3 characters long',
            minLength(3)
          )
        },
        password: {
          required: helpers.withMessage('Password is required', required),
          minLength: helpers.withMessage(
            'Password must be at least 8 characters long',
            minLength(8)
          )
        },
        passwordConfirmation: {
          required: helpers.withMessage('Password again is required', required),
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
      console.log(this.form)
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        console.log('Form is correct')
        this.$store.dispatch('auth/register', this.form).then(() => this.$router.push(this.redirectTo))
      }
    }
  }
})
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

.my_color{
  background-image: url(src/assets/blue.png);
}
</style>
