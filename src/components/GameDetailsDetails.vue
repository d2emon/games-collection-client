<template>
  <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field name="rate" type="number" label="Rate" id="rate" v-model="game.rate"></v-text-field>
                  <v-slider v-model="game.rate" thumb-label step="10" ticks></v-slider>
                </v-flex>
                <v-flex xs6>
                  <v-text-field name="progress" type="number" label="Progress" id="progress"i v-model="game.progress"></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-menu
                    lazy
                    :close-on-content-click="false"
                    v-model="selectAddDate"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="Date"
                      v-model="game.added"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="game.added" no-title scrollable actions>
                      <template slot-scope="{ save, cancel }">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                          <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                      </template>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-card>
                    <v-card-text>
                      <img :src="game.imageURL">
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6>
                  <v-card>
                    <v-card-text>
                      <img :src="game.imageURL">
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-text-field multi-line name="comments" label="Comments" id="comments"></v-text-field>
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
  data: function () {
    return {
      platform: this.game.platform,
      players: this.game.players,

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
