<script>
import Vue from 'vue'
import {VCard} from "vuetify/lib/components";

export default Vue.extend({
  name: 'CommentCard',

  extends: VCard,

  props: ['comment'],
})

</script>

<template>

  <v-card
      color="white"
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

</template>

<style scoped>

</style>
