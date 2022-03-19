<template>
  <q-page>
    <header class="text-center q-my-sm">
      <q-avatar icon="expand_more" font-size="40px" color="primary"> </q-avatar>
    </header>

    <div class="row">
      <div class="col-4">
        <q-card flat bordered square class="window-height">
          <q-card-section class="q-pa-md">
            <div class="row q-pb-md q-pl-md">
              <q-avatar
                class="q-p-lg q-mr-md"
                size="50px"
                font-size="30px"
                color="blue"
                text-color="white"
                icon="groups"
              />
              <p class="col" style="justify-content: center">VPWA</p>
            </div>
          </q-card-section>

          <q-card-section>
            <h6 class="q-ma-sm">CHANNELS</h6>
            <q-separator size="2px" color="black" />
          </q-card-section>
          <q-card-section>
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
            >
              <li><q-btn flat> # Channel 1</q-btn></li>

              <li># Channel 2</li>

              <li># Channel 3</li>

              <li># Channel 4</li>

              <li>2</li>

              <li>2</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-8">
        <q-card flat square bordered class="window-height">
          <q-card-section>
            <q-avatar
              class="q-p-lg q-mr-md"
              size="40px"
              font-size="20px"
              color=""
              text-color="white"
              icon=""
            /># Channel 1</q-card-section
          >
          <q-separator size="2px" color="black" />
          <q-card-section> </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
