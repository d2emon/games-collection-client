<template>
  <v-card flat v-if="game">
    <v-card-title>
      <v-layout row wrap>
        <v-flex xs3>
          <v-text-field
            name="game-id"
            label="Game ID"
            id="gameid"
            v-model="game._id"
          ></v-text-field>
        </v-flex>
        <v-flex xs9>
          <v-text-field
            name="title"
            label="Game Title"
            id="title"
            v-model="game.name"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-layout row wrap>
        <v-btn
          color="pink"
          dark
          fixed
          bottom
          right
          fab
          @click="saveGame"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-flex xs12 id="gameDetails">
          <v-tabs v-model="active">
            <v-tabs-bar class="primary" dark>
              <v-tabs-item key="Common" :href="'#Common'" ripple>Common</v-tabs-item>
              <v-tabs-item key="Details" :href="'#Details'" ripple>Details</v-tabs-item>
              <v-tabs-item key="Hints" :href="'#Hints'" ripple>Hints</v-tabs-item>
              <v-tabs-item key="Hands" :href="'#Hands'" ripple>Hands</v-tabs-item>
              <v-tabs-item key="Tags" :href="'#Tags'" ripple>Tags</v-tabs-item>
              <v-tabs-slider color="yellow"></v-tabs-slider>
            </v-tabs-bar>
            <v-tabs-items>
              <v-tabs-content
                key="Common"
                id="Common"
              >
                <v-card>
                  <v-card-text class="game-details">
                    <game-details-main />
                  </v-card-text>
                </v-card>
              </v-tabs-content>
              <v-tabs-content
                key="Details"
                id="Details"
              >
                <v-card>
                  <v-card-text class="game-details">
                    <!-- game-details-details :game="game" / -->
                  </v-card-text>
                </v-card>
              </v-tabs-content>
              <v-tabs-content
                :key="'Hints'"
                :id="'Hints'"
              >
                <v-card>
                  <v-card-text class="game-details">
                    <game-details-hints :game="game" />
                  </v-card-text>
                </v-card>
              </v-tabs-content>
              <v-tabs-content
                :key="'Hands'"
                :id="'Hands'"
              >
                <v-card>
                  <v-card-text class="game-details">
                    <game-details-hands :game="game" />
                  </v-card-text>
                </v-card>
              </v-tabs-content>
              <v-tabs-content
                :key="'Tags'"
                :id="'Tags'"
              >
                <v-card>
                  <v-card-text class="game-details">
                    <game-details-tags :game="game" />
                  </v-card-text>
                </v-card>
              </v-tabs-content>
            </v-tabs-items>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import GameDetailsMain from './GameDetailsMain'
import GameDetailsDetails from './GameDetailsDetails'
import GameDetailsHints from './GameDetailsHints'
import GameDetailsHands from './GameDetailsHands'
import GameDetailsTags from './GameDetailsTags'

export default {
  name: 'GameDetails',
  props: {
    id: null
  },
  components: {
    GameDetailsMain,
    GameDetailsDetails,
    GameDetailsHints,
    GameDetailsHands,
    GameDetailsTags
  },
  data: () => ({
    game: null,
    msg: 'Message',

    active: null,
    selectDate: null,
    selectAddDate: null
  }),
  methods: {
    loadGame: function (id) {
      this.$store.dispatch('game/loadGame', id).then(() => {
        console.log('Game loaded')
        console.log(this.$store.state.game.messages)
        console.log('Game')
        this.game = this.$store.state.game.game
        console.log(this.$store.state.game)
      })
    },
    saveGame: function () {
      if (!this.game) {
        return
      }
      this.$store.dispatch('game/saveGame', this.game).then(() => {
        console.log(this.game)
        console.log('Game saved')
        console.log(this.$store.state.game.game)
        alert('Saved')
      })
    }
  },
  watch: {
    id: function (val) {
      this.loadGame(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.game-details {
  height: 62vh;
  overflow: auto;
}
</style>

