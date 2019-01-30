<template>
  <v-layout row wrap>
    <v-flex
      xs2
      v-for="group in gameGroups"
      key="group.id"
    >
      <v-card>
        <v-card-title>
          <h1 v-text="group.title" />
        </v-card-title>
        <v-card-media
          contain
          height="200px"
          :src="group.src"
        >
        </v-card-media>
        <v-card-text
          v-if="group.description"
          class="group-description"
          v-html="group.description"
        />
        <v-card-actions>
          <v-btn
            @click="selectGame(group)"
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GameList from '@/components/GameList'
import GameDetails from '@/components/GameDetails'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'index-page',
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
  .group-description {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
