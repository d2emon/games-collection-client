<template>
  <v-layout row wrap>
    <v-flex
      xs12
    >
      <game-group
        :group="group"
        :show-text="true"
      >
        <v-card-text>
          <v-list v-if="games">
            <v-list-tile
              v-for="(game, id) in games"
              :key="id"
              to="/index"
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="game.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </game-group>
    </v-flex>
  </v-layout>

</template>

<script>
import GameGroup from '@/components/GameGroup'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GroupPage',
  components: {
    GameGroup
  },
  computed: {
    ...mapState('gameGroups', ['gameGroups', 'group', 'games']),
    groupId: function () { return this.$route.params.group }
  },
  methods: {
    ...mapActions('gameGroups', [ 'fetchGroup' ])
  },
  // created: function () { this.fetchGroups() },
  mounted: function () {
    this.fetchGroup(this.groupId)
  }
}
</script>

<style scoped>
</style>
