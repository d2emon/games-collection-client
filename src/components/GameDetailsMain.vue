<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-media :src="game.imageURL" height="200px"></v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs8>
      <v-select
        label="Platform"
        v-bind:items="platforms"
        v-model="platform"
        item-value="text"
      />
      <v-text-field
        label="Players"
        id="players"
        name="players"
        v-model="players"
        type="number"
      />
      <v-select
        label="Publisher"
        v-bind:items="companies"
        v-model="publisher"
        item-text="name"
        item-value="id"
      />
      <v-select
        label="Developer"
        v-bind:items="companies"
        v-model="developer"
        item-text="name"
        item-value="id"
      />
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="selectDate"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          label="Release Date"
          v-model="release"
          prepend-icon="event"
          readonly
        />
        <v-date-picker v-model="game.release" no-title scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>
      <v-select
        label="Genre"
        v-bind:items="genres"
        v-model="genre"
        item-value="text"
      />
    </v-flex>
    <v-flex xs12>
      <v-text-field
        multi-line
        name="description"
        label="Description"
        id="description"
        v-model="description"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameDetailsMain',
  computed: {
    platform: {
      get () { return this.$store.state.game.game.platform },
      set (value) { this.$store.commit('game/update', { platform: value }) }
    },
    players: {
      get () { return this.$store.state.game.game.players },
      set (value) { this.$store.commit('game/update', { players: value }) }
    },
    publisher: {
      get () { return this.$store.state.game.game.publisher },
      set (value) { this.$store.commit('game/update', { publisher: value }) }
    },
    developer: {
      get () { return this.$store.state.game.game.developer },
      set (value) { this.$store.commit('game/update', { developer: value }) }
    },
    release: {
      get () { return this.$store.state.game.game.release },
      set (value) { this.$store.commit('game/update', { release: value }) }
    },
    genre: {
      get () { return this.$store.state.game.game.genre },
      set (value) { this.$store.commit('game/update', { genre: value }) }
    },
    description: {
      get () { return this.$store.state.game.game.description },
      set (value) { this.$store.commit('game/update', { description: value }) }
    },
    ...mapState({
      game: state => state.game.game,
      companies: state => state.company.companies,
      platforms: state => state.game.platforms,
      genres: state => state.game.genres
    })
  },
  data: function () {
    return {
      active: null,
      selectDate: null,
      selectAddDate: null
    }
  },
  methods: {
    loadCompanies () {
      this.$store.dispatch('company/loadCompanies').then(() => {
        console.log('Companies loaded')
        console.log(this.$store.state.company.message)
        console.log('Companies')
        console.log(this.$store.state.company.companies)
      })
    }
  },
  mounted: function () {
    this.loadCompanies()
  }
}
</script>
