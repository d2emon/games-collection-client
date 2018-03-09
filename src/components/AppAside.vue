<template>
  <v-navigation-drawer
    temporary
    :right="right"
    v-model="rightDrawer"
    fixed 
  >
    <v-list>
      <v-list-tile @click.native="switchRight">
        <v-list-tile-action>
          <v-icon>compare_arrows</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: function () {
    return {
      right: true,
      rightDrawer: this.$store.state.menu.rightDrawer
    }
  },
  methods: {
    switchRight () {
      this.right = !this.right
      // this.$store.commit('menu/switchRight')
    }
  }
}
</script>
