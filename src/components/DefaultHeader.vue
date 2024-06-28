<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultHeader',

  data() {
    return {
      drawer: false,
      loggedUser: {
        first_name: 'Donia',
        gender: 'female',
      },
      notifications: [
        {title: 'notification 1'},
        {title: 'notification 2'},
        {title: 'notification 3'},
      ],
      currencies: [
        {name: 'Euro'},
        {name: 'Dolor'},
        {name: 'Yen'},
      ],
      languages: [
        {name: 'EN'},
        {name: 'SP'},
        {name: 'CH'},
      ],
      currentLang: {
        name: 'EN'
      }
    }
  }
})

</script>

<template>

    <v-app-bar
      absolute
      color="transparent"
      light
      elevation="0"
      class="top-0 px-6"
    >

      <div class="d-flex align-center">
        <v-img
            alt="PEPEHOUSING"
            class="mr-2"
            contain
            src="@/assets/images/logo.svg"
            width="53"
        />

        <strong class="hidden md:visible">PEPEHOUSING</strong>

      </div>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="body-2" text to="about">About Us</v-btn>
        <v-btn class="body-2" text to="become-a-house">Become a house</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu
            bottom
            left
            offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-badge
                :content="notifications.length > 0 ? notifications.length : false"
                overlap
                color="error"
                dark
                offset-x="22"
                offset-y="22"
            >
              <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                  light
              >
                <v-icon color="secondary-1" >mdi-email</v-icon>
              </v-btn>
            </v-badge>
          </template>

          <v-list
              v-if="notifications.length > 0"
          >
            <v-list-item
                v-for="(notification, i) in notifications"
                :key="i"
            >
              <v-list-item-title>{{ notification.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <span
              v-else
          >
          no any notifications
        </span>
        </v-menu>

        <v-menu
            bottom
            left
            offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="transparent"
                elevation="0"
                v-bind="attrs"
                v-on="on"
            >
              <span>Currency</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(currency, i) in currencies"
                :key="i"
            >
              <v-list-item-title>{{ currency.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
            bottom
            left
            offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="transparent"
                elevation="0"
                v-bind="attrs"
                v-on="on"
            >
              <span>{{ currentLang.name }}</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(language, i) in languages"
                :key="i"
            >
              <v-list-item-title>{{ language.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
            bottom
            left
            offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="transparent"
                elevation="0"
                v-bind="attrs"
                v-on="on"
            >
              <span>Hi, {{ loggedUser.first_name }}</span>
              <v-icon>mdi-chevron-down</v-icon>
              <v-avatar
                  size="40px"
              >
                <v-img
                    alt="avatar"
                    class="shrink mr-2"
                    contain
                    :src="'avatar' in loggedUser ? loggedUser.avatar : require(`@/assets/images/avatars/user-avatar-${loggedUser.gender}.svg`)"
                    transition="scale-transition"
                    width="40"
                />
              </v-avatar>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>profile</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>

    </v-app-bar>

</template>

<style scoped>

</style>
