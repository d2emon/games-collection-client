<template>
  <v-app id="games">
    <nav-sidebar />

    <app-header />

    <div class="app-body">
      <v-content>
        <v-container fluid fill-height grid-list-md class="grey lighten-4">
          <v-slide-y-transition mode="out-in">
            <router-view />
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <app-aside />
    </div>

    <!-- app-footer / -->

  </v-app>
</template>

<script>
import {
  NavSidebar,
  AppHeader,
  AppAside
  // AppFooter
} from '@/components/'

export default {
  components: {
    NavSidebar,
    AppHeader,
    AppAside
    // AppFooter,
  },
  data: () => ({
  })
}
</script>

<style>
#keep main .container {
  height: 660px;
}

.navigation-drawer__border {
  display: none;
}

.text {
  font-weight: 400;
}
</style>
