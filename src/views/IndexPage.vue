<template>
  <v-layout row wrap>
    <v-flex
      xs3
      v-for="group in gameGroups"
      key="group.id"
    >
      <v-card
        :to="`/group/${group.slug}`"
      >
        <v-card-title>
          <h1 v-text="group.title" />
        </v-card-title>
        <v-card-media
          contain
          height="200px"
          :src="group.src"
        >
        </v-card-media>
        <v-card-text>
          <div
            v-if="group.description"
            class="group-description"
            v-html="group.description"
          />
          <!-- div
            v-if="group.text"
            class="group-description"
            v-html="group.text"
          / -->
        </v-card-text>
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
    /*
    text-overflow: ellipsis;
    white-space: nowrap;
    */
    overflow: hidden;
    height: 105px;
    text-align: justify;
  }
</style>
