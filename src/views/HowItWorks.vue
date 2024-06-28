<script>
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default Vue.extend({
  name: 'BecomeAHostView',

  components: {
    DefaultLayout,
  },

  data() {
    return {
      workSteps: [
        {
          title: "Search and Select",
          description: "After choosing the city of your stay, it's time to find an ideally matching housing. First, go to the search filters, then select the preferred dates and pick the type of accommodation you are interested in.On our site, you'll discover over 2000 listings, including studios, private student rooms, and apartments. We have prepared such a large selection so that you can choose a place that perfectly matches your requirements.",
          image: "undraw-searching.svg",
          extra: {
            title: "Choose your favorite",
            description: "As you scroll through the options, pay attention to the sticker \"trusted landlord\" which means that the property is fully verified and has a professional owner whom you can trust.If a particular listing catches your interest, click on it to access a detailed property description.",
          },
        },{
          title: "Booking and Confirmation",
          description: "When you have decided to choose a particular property, click the \"Free Pre Book Now\" button and reserve your first apartment. The entire booking process is fully secure and you can complete it with just one click! After this step, the landlord receives your reservation and has 24 hours to confirm it. The whole procedure is supported by your personal Pepe Housing assistant, who coordinates the contact between you and the owner. The customer service makes sure that the whole process goes successfully and is at your full disposition whenever you need it.",
          image: "undraw-certification.svg",
          extra: {
            title: "Complete the payment",
            description: "After the landlord accepts your booking, you have 12 hours to transfer the payment of the first month's rent and booking fee. The booking fee is 10% of the contract value. You can check the booking fee amount for your reservation by selecting dates of stay on the property of your choice. You will be informed about the acceptance of the booking, and then the system will guide you through a simple payment procedure. The fastest and most secure way to pay is by bank card online on our website. Congratulations, after this step your reservation is fully finalized!",
          },
        },{
          title: "Move In",
          description: "Yes, it's that quick and easy! After payment is made you will receive full landlord contact details so it's time to arrange check-in details. It’s also a perfect moment to discuss lease contract details and security deposit payment. When your time of arrival finally comes, expect the landlord to welcome you at the exact address of your apartment. You can pick up the keys and it's finally time to move in! The first payment - which you made at the beginning of the booking process - will be transferred to the landlord 48 hours after your check-in.",
          image: "undraw-best-place.svg",
          extra: {
            title: "Feel safe and satisfied",
            description: "At pepehousing.com, you have the guarantee that the place that you are moving in is verified and looks the same as in pictures. We secure your payment, so if any issues arise, you have 24hours from check-in to report it to us. ",
          },
        },
      ],
    }
  },
})
</script>

<template>
  <default-layout>

    <div class="text-center break-keep">

<!--      <v-img-->
<!--          alt="how-it-works-banner"-->
<!--          contain-->
<!--          src="@/assets/images/vectors/background_01.svg"-->
<!--          width="100%"-->
<!--          class="absolute top-0 left-0 z-0"-->
<!--      />-->

      <v-container fluid class="px-0 md:px-inherit">

        <div class="grid grid-cols-6 gap-4 py-12 justify-center items-center">
          <div class="col-span-6 md:col-span-2 md:order-last">
            <v-img
                alt="how-it-works-banner"
                contain
                src="@/assets/images/how-it-works-banner.png"
                width="100%"
            />
          </div>
          <div class="col-span-6 md:col-span-4 pa-6 self-center">
            <div class="text-2xl md:text-6xl font-bold text-center md:text-left leading-9 md:leading-20 tracking-widest sticky z-100">
              Book Your Dream Apartment with
              <div class="inline-grid">
                3 Easy
                <v-img
                    alt="3-easy"
                    src="@/assets/images/vectors/underline_04.svg"
                    width="70%"
                />
              </div>
              <span>
                Steps!
              </span>
            </div>
          </div>
        </div>


        <strong class="primary--text text-lg md:text-2xl font-bold text-center py-6 block">How it Works</strong>

        <div
          class="grid grid-cols-6 gap-4 justify-center md:justify-start items-center md:items-start justify-items-center"
          v-for="(workStep, index) in workSteps"
          :key="index"
        >
          <div :class="`col-span-6 md:col-span-3 self-center order-first ${index%2 > 0 ? 'md:order-first': 'md:order-last'}`">
            <v-img
                :alt="workStep.title"
                contain
                :src="require(`@/assets/images/${workStep.image}`)"
                height="80%"
            />
          </div>
          <div :class="`col-span-6 md:col-span-3 px-0 md:px-inherit text-center md:text-start relative order-first ${index%2 > 0 ? 'md:order-last md:border-l-4 md:-ml-1': 'md:order-first md:border-r-4'} border-dashed border-orange-400`">
            <v-avatar
              size="62"
              color="white"
              :class="`hidden md:visible absolute top-0 ${index%2 > 0 ? '-left-8': '-right-8'}`"
            >
              <span class="primary--text">
                {{ index + 1 }}
              </span>
            </v-avatar>
            <v-card
              flat
              color="transparent"
            >
              <span class="md:hidden text-xs md:text-sm italic primary--text">Step {{ index + 1 }}</span>
              <v-card-title class="text-lg md:text-3xl justify-center md:justify-start md:text-start font-bold md:font-semibold pa-1 md:pa-4">
                {{ workStep.title }}
              </v-card-title>

              <v-card-text>
                <p class="text-base font-normal md:text-lg">{{ workStep.description }}</p>

                <v-card
                  flat
                  color="white"
                >
                  <v-card-title class="text-base md:text-lg font-semibold justify-center md:justify-start md:text-start">
                    {{ workStep.extra.title }}
                  </v-card-title>

                  <v-card-text>
                    <p class="text-sm font-normal">{{ workStep.extra.description }}</p>
                  </v-card-text>

                </v-card>
              </v-card-text>

            </v-card>
          </div>

        </div>

      </v-container>

      <v-card
          flat
          color="rgba(255, 217, 100, 0.1)"
          class="my-10"
      >

        <v-card-text class="text-lg md:text-2xl font-bold leading-7 md:leading-9 tracking-wider text-center secondary-2--text px-2 py-6 md:px-10 md:py-10">
          If you have any questions regarding our service please check our
          <a href="#" class="primary--text underline underline-offset-8">help section</a>
           our feel free to.
          <a href="#" class="primary--text underline underline-offset-8">contact us</a>
        </v-card-text>

      </v-card>

    </div>

  </default-layout>
</template>

<style scoped>

.v-application {
  background: #FAFAFA !important;
}
#app {
  background: #FAFAFA !important;
}
.v-application--wrap {
  background: #FAFAFA !important;
}
body {
  background: #FAFAFA !important;
}
.v-main {
  background: #FAFAFA !important;
}

.border-orange-400 {
  border-color: rgba(255, 230, 153, 1);
}

</style>
