<script>

import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultHeader',

  data() {
    return {
      drawer: false,
      socials: [
        {name: 'facebook', address: '#'},
        {name: 'instagram', address: '#'},
        {name: 'linkedin', address: '#'},
      ],
      companyList: [
        {title: 'About Us', address: '#', link: false},
        {title: 'Blog', address: '#', link: false},
        {title: 'Careers', address: '#', link: false},
        {title: 'Partners', address: '#', link: false},
        {title: 'Terms Of Service', address: '#', link: false},
        {title: 'Privacy Policy', address: '#', link: false},
        {title: 'Cookies Policy', address: '#', link: false},
      ],
      helpList: [
        {title: 'Faq', address: '#', link: false},
        {title: 'Accomodation', address: '#', link: false},
      ],
      forLandLordsList: [
        {title: 'Become A Host', address: '/#', link: false},
      ],
    }
  }
})

</script>

<template>

    <v-footer
        dark
        padless
    >
      <v-card
          color="#3C3F52"
          flat
          tile
          class="white--text text-left px-4"
      >
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-card
                  color="transparent"
                  flat
              >
                <v-card-text class="white--text">
                  <div class="d-flex align-center">
                    <v-img
                        alt="PEPEHOUSING"
                        class="flex-none mr-1"
                        src="@/assets/images/logo-dark.svg"
                        width="53"
                    />
                    <strong class="text-2xl">PEPEHOUSING</strong>
                  </div>
                </v-card-text>
                <v-card-text>
                  <p>
                    We are here to answer all you questions, help you in finding a property,
                    which meets your preferences and assist you in secure payments.
                    Do not hesitate to contact us!
                  </p>

                </v-card-text>
              </v-card>

              <br />

              <v-btn
                  v-for="(social, index) in socials"
                  :key="`social-${index}`"
                  icon
                  class="mx-3 white--text"
                  :href="social.address"
                  target="_blank"
              >
                <v-img
                    :alt="social.name"
                    :src="require(`@/assets/images/icons/social-${social.name}-icon.svg`)"
                    contain
                    transition="scale-transition"
                    width="32"
                    height="32"
                />
              </v-btn>

            </v-col>

            <v-col>
              <v-card
                  color="transparent"
                  flat
              >
                <v-card-text class="white--text">
                  <strong>COMPANY</strong>
                </v-card-text>

                <v-card-text>
                  <v-list
                    color="transparent"
                    dense
                  >
                    <v-list-item
                      v-for="(item, index) in companyList"
                      :key="`company-list-${index}`"
                      class="white--text"
                      :to="item.address"
                      :link="item.link"
                    >
                      <v-list-item-content>{{ item.title }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card
                  color="transparent"
                  flat
              >
                <v-card-text class="white--text">
                  <strong>HELP</strong>
                </v-card-text>

                <v-card-text>
                  <v-list
                    color="transparent"
                    dense
                  >
                    <v-list-item
                      v-for="(item, index) in helpList"
                      :key="`help-list-${index}`"
                      class="white--text"
                      :to="item.address"
                      :link="item.link"
                    >
                      <v-list-item-content>{{ item.title }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card
                  color="transparent"
                  flat
              >
                <v-card-text class="white--text">
                  <strong>FOR LANDLORDS</strong>
                </v-card-text>

                <v-card-text>
                  <v-list
                    color="transparent"
                    dense
                  >
                    <v-list-item
                      v-for="(item, index) in forLandLordsList"
                      :key="`for-landlords-list-${index}`"
                      class="white--text"
                      :to="item.address"
                      :link="item.link"
                    >
                      <v-list-item-content>{{ item.title }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card
                  color="transparent"
                  flat
                  block
              >
                <v-card-text class="white--text">
                  <strong>CUSTOMER SUPPORT</strong>
                </v-card-text>

                <v-card-text>
                  <v-btn
                    class="my-3"
                    rounded
                    elevation="0"
                    color="#07BDC6"
                    dark
                    block
                  >
                    Contact Us
                  </v-btn>

                  <v-btn
                      class="my-3"
                      rounded
                      elevation="0"
                      color="#07BDC6"
                      dark
                      outlined
                      block
                  >
                    Do You Need Any Help
                  </v-btn>

                </v-card-text>

              </v-card>
            </v-col>

          </v-row>

        </v-card-text>

      </v-card>
    </v-footer>

</template>

<style scoped>

</style>
