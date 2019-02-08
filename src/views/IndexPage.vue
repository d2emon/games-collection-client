<template>
  <v-layout row wrap>
    <v-flex
      xs3
      v-for="group in gameGroups"
      :key="group.id"
    >
      <game-group-small :group="group" :to="group.link" />
    </v-flex>
  </v-layout>
</template>

<script>
import GameGroupSmall from '@/components/GameGroupSmall'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'index-page',
  components: {
    GameGroupSmall
  },
  computed: mapState('gameGroups', [ 'gameGroups' ]),
  methods: {
    selectGame (payload) {
      alert(payload.slug)
    },
    ...mapActions('gameGroups', [ 'fetchGroups' ])
  },
  // created: function () { this.fetchGroups() },
  mounted: function () { this.fetchGroups() }
}
</script>

<style>
</style>
