<template>
  <div class="pt-20">
    <default-header />

      <slot />

    <default-footer />

  </div>


</template>

<script>
  import Vue from 'vue'
  import DefaultHeader from '@/components/DefaultHeader.vue'
  import DefaultFooter from '@/components/DefaultFooter.vue'

  export default Vue.extend({
    name: 'DefaultLayout',

    components: {
        DefaultHeader,
        DefaultFooter,
    }
  })
</script>
