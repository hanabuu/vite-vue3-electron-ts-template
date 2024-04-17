<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">about</router-link></li>
      </ul>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <span class="v-btn__overlay"></span>
        <span class="v-btn__underlay"></span>
        <span class="v-btn__content" data-no-activator="">
          <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true">
            <svg class="v-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
            </svg>
          </i>
        </span>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <div class="v-toolbar-title__placeholder">Application</div>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <!-- <HelloWorld msg="Vite + Vue" /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
