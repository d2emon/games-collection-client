<template>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-layout column>
                    <v-card>
                      <v-card-media :src="game.imageURL" height="200px"></v-card-media>
                    </v-card>
                  </v-layout>
                </v-flex>
                <v-flex xs8>
                  <v-select v-bind:items="platforms" v-model="game.platform" label="Platform" item-value="text"></v-select>
                  <v-text-field name="players" type="number" label="Players" id="players"></v-text-field>
                  <v-select
                    v-bind:items="companies"
                    v-model="game.publisher"
                    label="Publisher"
                    item-text="name"
                    item-value="id"
                  ></v-select>
                  <v-select
                    v-bind:items="companies"
                    v-model="game.developer"
                    label="Developer"
                    item-text="name"
                    item-value="id"
                  ></v-select>
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
                      v-model="game.release"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
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
                  <v-select v-bind:items="genres" v-model="game.genre" label="Genre" item-value="text"></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field multi-line name="description" label="Description" id="description" v-model="game.description"></v-text-field>
                </v-flex>
              </v-layout>
</template>

<script>
export default {
  name: 'GameDetailsMain',
  props: [
    'game'
  ],
  computed: {
    companies: function () { return this.$store.state.company.companies },
    platforms: function () { return this.$store.state.game.platforms },
    genres: function () { return this.$store.state.game.genres }
  },
  data: () => ({
    active: null,
    selectDate: null,
    selectAddDate: null
  }),
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
