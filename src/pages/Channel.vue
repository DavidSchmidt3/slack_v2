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
      <div class="col-xs-4 col-lg-2">
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
              <div class="col server_name">
                <b>FIIT</b>
              </div>
            </div>
          </q-card-section>
          <q-separator size="1px" color="black" />
          <q-card-section
            style="padding-bottom: 0"
            class="flex justify-start items-center channel_list"
          >
            <q-avatar
              icon="expand_more"
              font-size="22px"
              color="primary"
              text-color="white"
              size="26px"
            />
            <h6 class="q-ma-sm">Channels</h6>
          </q-card-section>
          <q-card-section style="padding-top: 5px">
            <ul
              class="q-gutter-md"
              style="list-style-type: none; padding-left: 1rem"
            >
              <li><q-btn flat># Channel 1</q-btn></li>
              <li># Channel 2</li>
              <li># Channel 3</li>
              <li># Channel 4</li>
              <li># Channel 5</li>
              <li># Channel 6</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-8 col-lg-10">
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
            <h5><b>#VPWA</b></h5>
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
  font-size: 25px;
  align-self: center;
}

.server_name_section {
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.channel_header {
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.channel_list {
}
</style>
