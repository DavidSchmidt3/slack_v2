<template flex>
  <q-page class="justify-center">
    <div class="text-center">
      <h4>Your Profile</h4>
      <q-separator> </q-separator>
    </div>
    <div class="row">
      <q-card flat bordered square class="q-pa-lg col-3">
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
          </div>
        </div>
      </q-card>

      <q-card bordered square flat class="col-6">
        <q-card-section class="row justify-center">
          <label class="text-center">SERVERS</label>
        </q-card-section>

        <q-separator />

        <q-separator />
        <q-scroll-area style="height: 29rem; width: 100%">
          <div class="q-gutter-sm q-ma-sm">
            <div class="row">
              <q-btn class="col-1" round to="/server">
                <q-avatar
                  class="q-p-lg"
                  size="80px"
                  font-size="30px"
                  color="blue"
                  text-color="white"
                  icon="group"
                />
              </q-btn>
              <label class="col-1 q-pl-lg self-center text-center">VPWA</label>
              <div class="col-4 text-center self-center" style="margin: 0%">
                <q-btn class="" color="primary">See all members</q-btn>
              </div>

              <q-btn class="offset-5" flat rounded color="red" icon="close">
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-1" round to="/server">
                <q-avatar
                  class="q-p-lg"
                  size="80px"
                  font-size="30px"
                  color="blue"
                  text-color="white"
                  icon="group"
                />
              </q-btn>
              <label class="col-1 q-pl-lg self-center text-center">VPWA</label>

              <q-btn class="offset-9" flat rounded color="red" icon="close">
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-1" round to="/server">
                <q-avatar
                  class="q-p-lg"
                  size="80px"
                  font-size="30px"
                  color="blue"
                  text-color="white"
                  icon="group"
                />
              </q-btn>
              <label class="col-1 q-pl-lg self-center text-center">VPWA</label>

              <q-btn class="offset-9" flat rounded color="red" icon="close">
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-1" round to="/server">
                <q-avatar
                  class="q-p-lg"
                  size="80px"
                  font-size="30px"
                  color="blue"
                  text-color="white"
                  icon="group"
                />
              </q-btn>
              <label class="col-1 q-pl-lg self-center text-center">VPWA</label>

              <q-btn class="offset-9" flat rounded color="red" icon="close">
              </q-btn>
            </div>
            <q-separator></q-separator>
            <div class="row">
              <q-btn class="col-1" round to="/server">
                <q-avatar
                  class="q-p-lg"
                  size="80px"
                  font-size="30px"
                  color="blue"
                  text-color="white"
                  icon="group"
                />
              </q-btn>
              <label class="col-1 q-pl-lg self-center text-center">VPWA</label>

              <q-btn class="offset-9" flat rounded color="red" icon="close">
              </q-btn>
            </div>
          </div>
        </q-scroll-area>
        <q-separator></q-separator>
      </q-card>

      <q-card bordered square flat class="col-3">
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
      </q-card>
    </div>
  </q-page>
</template>
