<script>
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// import Swiper, { Pagination } from 'swiper';
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css'
// import 'swiper/css/pagination'

export default Vue.extend({
  name: 'BecomeAHostView',

  components: {
    DefaultLayout,
    // Swiper,
    // SwiperSlide
  },

  data() {
    return {
      // swiperModules: [Pagination],
      customerWordsWindow: {
        length: 3,
        current: 1,
      },
      signupForm: {
        data: {
          first_name: '',
          surname: '',
          email: '',
          phone: '',
          cities: [],
          properties_number: '',
        },
        rules: {
          first_name: [
            v => !!v || 'First Name is required',
          ],
          surname: [
            v => !!v || 'Surname is required',
          ],
          email: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'Email not valid',
          ],
          phone: [
            v => !!v || 'Phone is required',
          ],
          cities: [
            v => v.length < 1 || 'cities is required',
          ],
          properties_number: [
            v => !!v || 'properties number is required',
          ],
        },
      },
      cities: [
        {key: '1', name: 'Warsaw'},
        {key: '2', name: 'Kraków'},
        {key: '3', name: 'Wrocław'},
        {key: '4', name: 'Wrocław'},
        {key: '5', name: 'Łódź'},
        {key: '6', name: 'Poznań'},
        {key: '7', name: 'Gdańsk'},
        {key: '8', name: 'Szczecin'},
        {key: '9', name: 'Bydgoszcz'},
        {key: '10', name: 'Lublin'},
        {key: '11', name: 'Białystok'},
        {key: '12', name: 'Katowice'},
      ],
      propertyNumbers: [
        {key: '1', title: 'one properties'},
        {key: '2', title: 'two properties'},
        {key: '3', title: 'more than five properties'},
        {key: '4', title: 'more than ten properties'},
      ],
      statistics: [
        {
          title: "2000+",
          caption: "offers published",
        },{
          title: "7 +",
          caption: "Years of Experience",
        },{
          title: "100 %",
          caption: "Positive Feedback",
        },
      ],
      rentCauses: [
        {
          title: "Create Your Offer For Free",
          icon: "mobile-pephousing-icon.svg",
        },{
          title: "Accept Bookings Fully Online",
          icon: "search-house-icon.svg",
        },{
          title: "Choose Your Tenants And Earn Mony",
          icon: "house-key-icon.svg",
        },
      ],
      comments: [
        {
          content: "I have been working with Pepe Housing since March 2016. Despite initial concerns about the team's young age, " +
              "it is their age that has proven to be an advantage over others. Commitment and willingness are " +
              "the main strengths of the Pepe Housing team. Initially, I decided to rent rooms in one of my apartments. " +
              "At the moment, Pepe Housing has found international tenants for three of my properties. " +
              "Working with Pepe Housing means minimal costs and saves me time. " +
              "I can trust them and count on their help even when I am on vacation :)",
          sender: {
            fullname: "Andrzej Bieniek",
            introduce: "Warsaw",
            gender: "male",
            avatar: "customer-3.png",
          }
        },
        {
          content: "For those who own an apartment for rent, I highly recommend working with Pepe Housing." +
              "This company provides a professional service, handling all formal and settlement issues in a timely manner." +
              "Pepe Housing offers a very attractive rate of return on investment." +
              "Based on my example, I can say that I earned about 30% net more compared to average market rates." +
              "Pepe Housing is also flexible, willing to negotiate. Their partners are Polish universities," +
              "which ensures that there is no downtime in renting a unit. After reviewing Pepe Housing's offerings," +
              "recalculating costs and comparing them with the competition, you will come to the conclusion that it really pays off.",
          sender: {
            fullname: "Monika",
            introduce: "Warsaw",
            gender: "female",
            avatar: "customer-1.png",
          }
        },
        {
          content: "Renting to foreign students is a very interesting alternative to student rentals. " +
              "Although the rental periods may be somewhat shorter, proper management of bookings " +
              "and optimal preparation of the offer can provide very attractive rental income, " +
              "often higher than from standard residential rentals. Pepe Housing is a company that works with universities to " +
              "efficiently connect local real estate listings with incoming students",
          sender: {
            fullname: "Robert Kuliga",
            introduce: "Vice President of the Board of Directors of the Mieszkanicznik Association",
            gender: "male",
            avatar: "customer-2.png",
          }
        },
      ],
      workSteps: [
        {
          description: "Publish your property on our platform along with a  photos, " +
              "a high-quality video of your apartment, and a detailed property plan.",
        },{
          description: "Potential tenants browse our platform and choose your property.",
        },{
          description: "The tenant reserves the apartment and pays, through Pepe Housing, the equivalent of the first rent.",
        },{
          description: "We send you information about the reservation of your property along with " +
              "all important information about the tenant (age, nationality, place of work or university name). " +
              "You have 24 hours to accept or reject the reservation.",
        },{
          description: "Only if you accept the reservation, we will collect the equivalent of the first rent " +
              "from the tenant's account, which, lowered by a commission of 8.61% gross (7% net), " +
              "will be transferred to you within 48 hours after the tenant moves in.",
        }, {
          description: "You sign the contract with the tenant yourself, collect the deposit and hand over the keys. " +
              "A dedicated person from our team will help you through the entire process.",
        },
      ],
      faqs: [
        {
          title: "How do you start a partnership?",
          description: "Please click \"Add property.\" " +
              "The system will guide you through the registration process to enter the property. " +
              "Fill out the forms and add photos. One of our consultants will verify the quality of " +
              "the listing and needed or there is a possibility of optimizing the listing.",
        },{
          title: "What does the leasing process look like?",
          description: "Your property is published and actively promoted through our marketing channels " +
              "and in our network of partners. You will receive pre-booking information or inquiries from potential tenants. " +
              "You decide whose reservation you accept and under what conditions. After you accept the reservation, " +
              "tenants pay the equivalent of the first rent to secure the reservation. Within 48 hours after the tenants check in, " +
              "the equivalent of the first rent, lowered by the commission, will be transferred to your account.",
        },{
          title: "What if I don't accept the reservation?",
          description: "",
        },{
          title: "What is the next step after accepting the reservation?",
          description: "",
        },{
          title: "What if the tenant cancels the reservation?",
          description: "",
        },{
          title: "Are all tenants students?",
          description: "",
        },{
          title: "Is the cooperation with Pepe Housing exclusive?",
          description: "",
        },{
          title: "How long is the lease term?",
          description: "",
        },{
          title: "Do I need to sign an agreement with Pepe Housing and the tenant?",
          description: "",
        },{
          title: "How does Pepe Housing verify tenants?",
          description: "",
        },{
          title: "What are the advantages of working with Pepe Housing?",
          description: "",
        },{
          title: "What if my tenant moves out earlier than the contract states?",
          description: "",
        },{
          title: "Can I contact Pepe Housing with questions or unforeseen situations?",
          description: "",
        },
      ],
      faqPanel: [],
      customerWordsHeight: 'auto',
      workStepsHeight: 'auto',
    }
  },

  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },

  mounted() {
    // new Swiper('.swiper', {
    //   modules: [Pagination],
    //   loop: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   spaceBetween: 30,
    //   autoResize: false,
    //   // visibilityFullFit: true,
    //   slidesPerView: 3,
    //   // breakpoints: {
    //   //   640: {
    //   //     slidesPerView: 3,
    //   //   },
    //   // },
    // })

    this.$set(this, 'customerWordsHeight', Math.max(...this.$refs.customerWordsCard.map(function (c) {
      return c.clientHeight
    })) + 'px')
    console.log(this.$refs.workStepsCard)
    this.$set(this, 'workStepsHeight', Math.max(...this.$refs.workStepsCard.map(function (c) {
      return c.clientHeight
    })) + 'px')
  }
})
</script>

<template>
  <default-layout>

    <div class="text-center">

      <v-container fluid class="px-0 md:px-4">

        <div class="relative overflow-visible">
          <v-img
              alt="become-a-host-banner"
              contain
              src="@/assets/images/become-a-host-banner.png"
              width="100%"
              class="rounded-t-2xl rounded-b-0 md:rounded-2xl"
          />

          <div class="absolute bottom-0 w-full">
            <div class="grid grid-cols-9">
              <v-card
                  flat
                  tile
                  color="transparent"
                  class="col-start-2 col-span-7 z-10 border-0 secondary-2--text pepehousing-card"
              >
                <div class="bg-white opacity-70 w-full h-full absolute"></div>

                <v-card-text class="justify-center pa-2 pb-0 md:pa-4 break-keep uppercase z-10 sticky">
                  <span>Rent your property through</span>
                  <br/>
                  <h1>pepe housing</h1>
                </v-card-text>
              </v-card>
            </div>
          </div>

        </div>

        <div class="grid grid-cols-9">
          <div class="col-start-0 col-span-9 md:col-start-2 md:col-span-7">
            <v-card
              flat
              class="px-4 md:px-12"
            >
              <v-card-text class="mb-10">
                <p class="capitalize text-base md:text-2xl">
                  Save your time, make money, and we will find you great tenants without viewing the apartment.
                </p>
                <v-btn
                    dark
                    color="primary"
                    elevation="0"
                    class="my-3 md:my-6 w-full md:w-auto rounded-lg text-xl px-8"
                >
                  ADD PROPERTY
                </v-btn>
              </v-card-text>

              <v-card-text class="my-10">
                <div class="grid grid-cols-12 md:gap-16 gap-4 justify-around">
                  <div
                      v-for="(statistic, index) in statistics"
                      :key="index"
                      :class="`${statistics.length%2 > 0 && index === statistics.length - 1 ? 'col-start-4' : '' } col-span-6 md:col-start-0 md:col-span-4 pa-3 md:pa-6 rounded-5xl statistic-card`"
                  >
<!--                    ${index === statistics.length - 1 ? 'col-span-5' : 'col-span-2'}`-->
                    <span class="font-extrabold text-2xl md:text-5xl whitespace-nowrap flex place-content-center">{{ statistic.title }}</span>
                    <br/>
                    <span class="text-xs md:text-sm whitespace-nowrap flex place-content-center">{{ statistic.caption }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>

    </v-container>

    <v-container fluid>

      <v-card
          flat
          color="gray-1"
          class="inline-block justify-center rounded-xl px-2 py-6 sm:pa-6 my-10"
        >
          <v-card-title class="uppercase text-base md:text-2xl font-semibold break-keep md:px-20 px-0 py-2">
            Official erusmus student network partnet for accommodation for international students in poland
          </v-card-title>
          <v-card-title>
            <div class="grid grid-cols-8 justify center">
              <div class="col-span-8 sm:col-start-3 sm:col-span-4 px-6">
                <v-img
                    alt="ieesn"
                    contain
                    src="@/assets/images/ieesn.png"
                    transition="scale-transition"
                />
              </div>
            </div>
          </v-card-title>
        </v-card>

        <v-card
          flat
          class="grid justify-items-center my-10"
        >
          <v-card-title class="mb-12 text-lg font-semibold md:text-4xl break-keep">
            Why should you rent through Pepe Housing?
          </v-card-title>
          <v-card-text>
            <div class="grid grid-cols-6 gap-4">
              <v-card
                v-for="(rentCause, index) in rentCauses"
                :key="`rent-cause-${index}`"
                flat
                outlined
                class="col-span-6 md:col-span-2 rent-cause-card pt-2 pb-3 px-6"
              >
                <v-card-text>
                  <v-img
                      :alt="rentCause.title"
                      contain
                      :src="require(`@/assets/images/icons/${rentCause.icon}`)"
                      transition="scale-transition"
                      width="64"
                      class="mx-auto"
                  />
                  <span class="text-base md:text-2xl font-semibold pt-3 leading-10 d-block">{{ rentCause.title }}</span>
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>

      </v-container>

      <v-card
        flat
        color="rgba(255, 217, 100, 0.1)"
        class="my-10"
      >
        <v-card-text>
          <div class="grid grid-cols-4 justify-center">
            <div class="col-start-0 col-span-4 md:col-start-2 md:col-span-2">
              <v-card
                flat
                color="transparent"
                class="px-1 py-6 md:pa-6"
              >
                <v-card-title class="relative text-2xl md:text-3xl font-semibold break-keep mb-5 pa-2 md:pa-4">
                  <v-img
                      alt="attention"
                      class="w-5 md:w-11 absolute -right-2 -top-2 md:-right-4 md:-top-4"
                      src="@/assets/images/vectors/highlight_05.svg"
                  />
                  <v-img
                      alt="attention"
                      class="w-5 md:w-11 rotate-270 absolute -left-2 -top-2 md:-left-4 md:-top-4"
                      src="@/assets/images/vectors/highlight_05.svg"
                  />
                  We Will Help You Find Great Students Who Will Soon Become Your Tenants
                </v-card-title>
                <v-card-text>
                  <v-btn
                      dark
                      color="primary"
                      elevation="0"
                      class="text-xl w-full md:w-auto rounded-lg px-8"
                  >
                    ADD PROPERTY
                  </v-btn>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-container fluid class="px-0 md:px-auto">

<!--        <swiper :modules="swiperModules" :slides-per-view="1" :pagination="{ clickable: true }">-->
<!--          <swiper-slide class="w-full h-full primary">Slide 1</swiper-slide>-->
<!--          <swiper-slide class="w-full h-full primary">Slide 2</swiper-slide>-->
<!--          <swiper-slide class="w-full h-full primary">Slide 3</swiper-slide>-->
<!--        </swiper>-->

        <v-card
          flat
          class="my-10 grid justify-items-center"
        >
          <span class="text-xs md:text-sm italic primary--text">Testimonial</span>
          <v-card-title class="text-lg md:text-3xl mb-6">
            What Our Customer Say
          </v-card-title>

          <v-card
              flat
              class="grid justify-items-center relative py-4"
          >
            <v-card-text class="pb-8">
              <div class="gray-1 w-full h-full absolute top-0 left-0 z-0 md:scale-x-90 md-scale-x-90"></div>
              <v-window v-model="customerWordsWindow.current" class="overflow-visible">
                <div class="grid grid-cols-6 gap-4">
                  <v-window-item
                      v-for="(comment, index) in comments"
                      :key="`comment-${index}`"
                      :class="`col-span-6 md:col-span-2 ${index < customerWordsWindow.current ? 'order-last' : ''} md:!block md-block-important`"
                      :eager="true"
                  >
                    <v-card
                        color="white"
                        class="customer-words-card h-full rounded-2xl pa-1 md:pa-2"
                    >
                      <v-card-text class="block text-center" ref="customerWordsCard" :style="`height: ${customerWordsHeight}`">
                        <p class="text-xl">“</p>
                        <p class="text-sm md:text-base font-normal leading-6 tracking-tight">
                          {{ comment.content }}
                        </p>
                      </v-card-text>
                      <v-card-text class="pt-0">
                        <div class="border-t border-dashed border--gray-2">
                          <v-avatar class="mt-3">
                            <img
                                :src="comment.sender.avatar ? require(`@/assets/images/avatars/${comment.sender.avatar}`) : require(`@/assets/images/avatars/user-avatar-${comment.sender.gender}`)"
                                :alt="comment.sender.fullname"
                            >
                          </v-avatar>

                          <span class="block text-base leading-6 tracking-wider font-medium py-2 px-4">{{ comment.sender.fullname }}, {{ comment.sender.introduce }}</span>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-window-item>
                </div>
              </v-window>
            </v-card-text>

            <v-card-actions class="justify-space-between">
              <v-item-group
                  v-model="customerWordsWindow.current"
                  class="text-center"
                  mandatory
              >
                <v-item
                    v-for="n in customerWordsWindow.length"
                    :key="`btn-${n}`"
                    v-slot="{ active, toggle }"
                >
                  <v-btn
                      :input-value="active"
                      icon
                      x-small
                      @click="toggle"
                      :color="active ? 'primary' : 'gray-2'"
                      class="px-3"
                  >
                    <v-icon :color="active ? 'primary' : 'gray-2'">mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
            </v-card-actions>
          </v-card>

        </v-card>

        <v-card
            flat
            class="my-10"
        >
          <v-card-title class="capacity justify-center mb-10">
          </v-card-title>
          <v-card-text>
            <div class="grid grid-cols-7 gap-3">
              <div class="col-span-7 md:col-span-1">
                <v-card
                    flat
                    color="primary-2"
                    class="rounded-xl pa-6 h-full grid align-content-center justify-center"
                >
                  <v-card-text class="text-lg md:text-4xl md-rotate-270 whitespace-nowrap">
                    <strong class="uppercase">
                      How does it works
                    </strong>
                    <v-img
                        alt="how does it works"
                        contain
                        src="@/assets/images/vectors/underline_03.svg"
                        height="100%"
                    />
                  </v-card-text>
                </v-card>
              </div>
              <div class="col-span-7 md:col-span-6">
                <div class="grid grid-cols-6 gap-3">
                  <v-card
                    v-for="(workStep, index) in workSteps"
                    :key="index"
                    elevation="0"
                    outlined
                    class="col-span-6 md:col-span-3 rounded-xl work-step-card"
                  >
                    <v-card-text class="text-start" ref="workStepsCard" :style="`height: ${workStepsHeight}`">
                      <v-avatar
                          color="primary-2"
                          size="54"
                          class="primary--text mb-2 text-lg md:text-3xl font-extrabold"
                      >
                        {{ index + 1 }}
                      </v-avatar>
                      <p class="text-base md:text-lg font-normal">{{ workStep.description }}</p>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <v-card
          flat
          class="md:px-20 px-0"
        >
          <v-card-title class="justify-center md:mb-10">
            <strong class="text-4xl font-semibold hidden md:visible">Sign Up</strong>
            <strong class="text-lg font-semibold md:hidden">Contact Details</strong>
          </v-card-title>
          <v-card-text class="signup-card py-6 px-4 md:py-32 md:px-20">
            <v-form v-model="signupForm.valid" class="grid grid-cols-6 gap-4 text-start text-sm font-semibold md:text-base md:font-bold">
              <div class="col-span-6">
                <strong>Personal Info</strong>
              </div>
              <div class="col-span-6 md:col-span-3">
                <label class="secondary-3--text text-sm font-normal">First Name</label>
                <v-text-field
                    v-model="signupForm.data.first_name"
                    :rules="signupForm.rules.first_name"
                    placeholder="First Name"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-text-field>
              </div>
              <div class="col-span-6 md:col-span-3">
                <label class="text-sm font-normal">Surname</label>
                <v-text-field
                    v-model="signupForm.data.surname"
                    :rules="signupForm.rules.surname"
                    placeholder="Surname"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-text-field>
              </div>
              <div class="col-span-6">
                <strong>Contact Info</strong>
              </div>
              <div class="col-span-6 md:col-span-3">
                <label class="secondary-3--text text-sm font-normal">Email</label>
                <v-text-field
                    v-model="signupForm.data.email"
                    :rules="signupForm.rules.email"
                    placeholder="Email"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-text-field>
              </div>
              <div class="col-span-6 md:col-span-3">
                <label class="text-sm font-normal">Phone</label>
                <v-text-field
                    v-model="signupForm.data.phone"
                    :rules="signupForm.rules.phone"
                    placeholder="Phone"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-text-field>
              </div>
              <div class="col-span-6 md:col-span-3">
                <strong class="block pb-3">In witch city do you own your properties?</strong>
                <label class="secondary-3--text text-sm font-normal">Cities (You can choose more than one)</label>
                <v-select
                    :items="cities"
                    item-text="name"
                    item-value="key"
                    v-model="signupForm.data.cities"
                    multiple
                    placeholder="Cities (You can choose more than one)"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-select>
              </div>
              <div class="col-span-6 md:col-span-3">
                <strong class="block pb-3">How many properties do you own?</strong>
                <label class="secondary-3--text text-sm font-normal">Number Of Properties</label>
                <v-select
                    :items="propertyNumbers"
                    item-text="title"
                    item-value="key"
                    v-model="signupForm.data.properties_number"
                    placeholder="Number of properties"
                    dense
                    outlined
                    required
                    hide-details="auto"
                ></v-select>
              </div>
              <div class="col-span-6">
                <p class="text-xs md:text-sm font-normal leading-5">Pepe Housing sp. z o.o. Warszawa (00-052), ul.
                  Świętokrzyska 18, lok 405 is the Controller of your personal data is Pepe Housing sp.
                  <a href="#" class="capitalize primary--text text-xs font-semibold pa-0">… Read More</a>
                </p>
              </div>
              <div class="col-span-6 text-end">
                <v-btn
                    elevation="0"
                    dark
                    color="primary"
                    class="w-full md:w-auto rounded-lg text-xl px-16"
                    to="#"
                >
                  Send
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card
          flat
          class="my-10"
        >
          <v-card-title class="justify-center text-lg md:text-3xl font-seibold mb-3 md:mb-10">
            Your questions, answered
          </v-card-title>
          <v-card-text>
            <v-expansion-panels
                v-model="faqPanel"
                accordion
                multiple
                class="grid grid-cols-6 gap-4"
            >
              <v-expansion-panel
                  v-for="(faq, index) in faqs"
                  :key="`faq-${index}`"
                  class="col-span-6 md:col-span-3 gray-1 secondary-1--text rounded"
              >
                <v-expansion-panel-header class="text-base font-semibold md:text-lg">{{ faq.title }}</v-expansion-panel-header>
                <v-expansion-panel-content class="text-start text-xs font-normal md:text-base elevation-0">{{ faq.description }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>

      </v-container>

    </div>

  </default-layout>
</template>

<style scoped>

.break-keep {
  word-break: keep-all;
}

.rotate-270 {
  transform: rotate(270deg);
}

.scale-x-90 {
  transform: scaleX(0.9);
}

.v-expansion-panel::before {
  box-shadow: none;
}
.v-expansion-panel::after {
  border-top: none;
}

.v-btn--active:hover::before, .v-btn--active::before {
  opacity: 0;
}

.block-important {
  display: block !important;
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(216, 214, 222, 1);
}

.pepehousing-card {
  border-radius:32px 32px 0 0 !important;
  letter-spacing: 2.7px;
}
.pepehousing-card span {
  font-size: 48px;
  font-weight:700;
  line-height:74.4px;
}
.pepehousing-card h1 {
  font-size: 49px;
  font-weight:800;
  line-height:75.95px;
  bottom: 40px;
  border-radius:0 32px 32px 0;
}

.statistic-card {
  border-radius: 32px;
  box-shadow: 0px 11px 48px 0px rgba(51, 51, 51, 0.06),
              0px 11px 48px 0px rgba(51, 51, 51, 0.06)
              !important;
}

.rent-cause-card {
  border-radius: 16px;
  border: 1px solid #E0E3EB;
}

.customer-words-card {
  border-radius: 16px;
  box-shadow: 0px 2px 20px 0px rgba(23, 58, 110, 0.06),
              0px 29px 18px 0px rgba(20, 18, 103, 0.03)
              !important;
}
.customer-words-back {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transform: scale(0.9, 1);
}

.work-step-card {
  border: 1px solid #E0E3EB;
}
.work-step-card p {
  font-size: 18px;
  font-weight: 400;
  line-height: 27.9px;
  text-align: left;
}

.signup-card {
  border-radius: 16px !important;
  padding: 80px 80px 80px 80px;
  box-shadow: 4px 4px 30px 0px rgba(168, 168, 168, 0.3) !important;
}


@media only screen and (max-width: 640px) {
  .pepehousing-card span {
    font-size: 20px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 2.7px;
  }
  .pepehousing-card h1 {
    font-size: 22px;
    font-weight: 900;
    line-height: 34.1px;
    letter-spacing: 2.7px;
  }
}

@media only screen and (min-width: 640px) {
  .md-rotate-270 {
    transform: rotate(270deg);
  }

  .md-scale-x-90 {
    transform: scaleX(0.9);
  }

  .md-block-important {
    display: block !important;
  }
}

</style>
