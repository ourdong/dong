<template>
  <div id="app">
      <v-header v-show="headflage"></v-header>
      <div class="pages">
        <router-view></router-view>
      </div>
      <v-footer v-show="footflage"></v-footer>
  </div>
</template>

<script>

import header from '@/components/header'
import footer from '@/components/footer'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            headflage: true,
            footflage: true
        }
    },
    components: {
        'v-header': header,
        'v-footer': footer
    }
    // methods: {
    //     removehead() {
    //         this.$store.commit("headhide",true);
    //     },
    //     removefoot() {
    //         this.$store.commit("foothide",true);
    //     }
    // },
    // mounted () {
    //     this.removehead(),
    //     this.removefoot()
    // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
