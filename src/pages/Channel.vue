<template>
  <q-page>
    <header class="text-center q-my-sm">
      <q-avatar
        icon="expand_more"
        font-size="25px"
        color="primary"
        text-color="white"
        size="30px"
      />
    </header>

    <div class="row">
      <div class="col-4">
        <q-card flat bordered square class="window-height">
          <q-card-section class="server_name_section">
            <div class="row">
              <q-avatar
                class="q-p-lg q-mr-md"
                size="50px"
                font-size="30px"
                color="primary"
                text-color="white"
                icon="groups"
              />
              <div class="col server_name">FIIT</div>
            </div>
          </q-card-section>
          <q-separator size="1px" color="black" />

          <q-card-section class="flex justify-start items-center">
            <q-avatar
              icon="expand_more"
              font-size="22px"
              color="primary"
              text-color="white"
              size="26px"
            />
            <h6 class="q-ma-sm">Channels</h6>
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
          <q-card-section class="channel_header">
            <!-- <q-avatar
              class="q-p-lg q-mr-md"
              size="40px"
              font-size="20px"
              color=""
              text-color="white"
              icon=""
            /># Channel 1 -->
            #VPWA
          </q-card-section>
          <q-separator size="1px" color="black" />
          <q-card-section> </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.server_name {
  align-self: center;
}

.server_name_section {
  padding: 5px 15px;
}

.channel_header {
  padding: 20px 20px 19px 15px;
}
</style>
