<template flex>
  <q-page class="justify-center">
    <div class="text-center">
      <h4 class="q-ma-lg">Your Profile</h4>
      <q-separator> </q-separator>
    </div>
    <div class="row">
      <q-card flat bordered square class="q-pa-lg col-xs-12 col-sm-4 col-lg-3">
        <div class="text-center q-mt-md">
          <q-avatar
            class="q-p-lg"
            size="120px"
            font-size="40px"
            color="blue"
            text-color="white"
            icon="person"
          />
          <h4 class="q-mb-md">Dávid Schmidt</h4>
          <div class="">
            <q-btn color="primary" class="q-ma-md"> Change username</q-btn>
            <q-btn color="primary" class="q-ma-md"> Change Password</q-btn>
            <q-btn color="red" class="q-ma-md"> Delete account </q-btn>
            <div>
              <q-checkbox
                v-model="mentionedNotifications"
                label="Recieve notifications only when mentioned"
              />
            </div>
          </div>
        </div>
      </q-card>

      <q-card bordered square flat class="col-xs-12 col-sm-8 col-lg-6">
        <q-card-section class="row justify-center">
          <label class="text-center">SERVERS</label>
        </q-card-section>

        <q-separator />

        <q-separator />
        <q-scroll-area style="height: 29rem; width: 100%">
          <div class="q-gutter-sm q-ma-xs-xs q-ma-sm-md">
            <div class="row">
              <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >VPWA</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >VPWA</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >VPWA</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >VPWA</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
                <div class="gt-xs">
                  <q-avatar
                    class="q-p-md"
                    size="80px"
                    font-size="30px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
                <div class="lt-sm">
                  <q-avatar
                    class="q-p-lg"
                    size="60px"
                    font-size="25px"
                    color="blue"
                    text-color="white"
                    icon="group"
                  />
                </div>
              </q-btn>
              <label class="col-xs-3 col-sm-3 self-center text-center"
                >VPWA</label
              >
              <div
                class="col-xs-5 col-sm-5 text-center self-center"
                style="margin: 0%"
              >
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn
                class="col-xs-2 col-sm-2"
                flat
                rounded
                color="red"
                icon="close"
              >
              </q-btn>
            </div>
          </div>
        </q-scroll-area>
        <q-separator></q-separator>
      </q-card>

      <q-card bordered square flat class="col-xs-12 col-sm-12 col-lg-3">
        <q-card-section class="row justify-center">
          <label class="text-center">FRIENDS</label>
        </q-card-section>

        <q-separator />

        <q-separator />

        <q-card-section>
          <div class="text-center">
            <q-btn color="green"> Add a friend </q-btn>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
              <div class="gt-xs">
                <q-avatar
                  class="q-p-md"
                  size="50px"
                  font-size="20px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
              <div class="lt-sm">
                <q-avatar
                  class="q-p-lg"
                  size="60px"
                  font-size="25px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
            </q-btn>
            <label class="col-xs-4 col-sm-4 self-center text-center"
              >Alice</label
            >
            <div>
              <span class="q-ma-md q-pa-sm grey-dot"></span>
            </div>

            <div
              class="col-xs-2 col-sm-2 text-center self-center"
              style="margin: 0%"
            ></div>

            <q-btn
              class="col-xs-1 col-sm-2 col-md-1"
              flat
              rounded
              color="red"
              icon="close"
            >
            </q-btn>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <div class="row">
            <q-btn class="col-xs-2 col-sm-2" round flat to="/server">
              <div class="gt-xs">
                <q-avatar
                  class="q-p-md"
                  size="50px"
                  font-size="20px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
              <div class="lt-sm">
                <q-avatar
                  class="q-p-lg"
                  size="60px"
                  font-size="25px"
                  color="blue"
                  text-color="white"
                  icon="person"
                />
              </div>
            </q-btn>
            <label class="col-xs-4 col-sm-4 self-center text-center"
              >Ctibor Kovalčík</label
            >
            <div>
              <span class="q-ma-md q-pa-sm green-dot"></span>
            </div>

            <div
              class="col-xs-2 col-sm-2 text-center self-center"
              style="margin: 0%"
            ></div>

            <q-btn
              class="col-xs-1 col-sm-2 col-md-1"
              flat
              rounded
              color="red"
              icon="close"
            >
            </q-btn>
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface State {
  mentionedNotifications: boolean;
}

export default defineComponent({
  name: 'ProfileLayout',
  data: (): State => {
    return {
      mentionedNotifications: false,
    };
  },
});
</script>

<style>
.green-dot {
  height: 25px;
  width: 25px;

  background-color: green;
  border-radius: 50%;
  display: inline-block;
}

.red-dot {
  height: 25px;
  width: 25px;

  background-color: red;
  border-radius: 50%;
  display: inline-block;
}

.grey-dot {
  height: 25px;
  width: 25px;

  background-color: rgb(121, 119, 117);
  border-radius: 50%;
  display: inline-block;
}
</style>
