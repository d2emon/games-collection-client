<template>

    <v-flex xs8 v-if="game">
      <v-layout row wrap>
        <v-flex xs12>
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
                      <v-layout row wrap>
                        <v-flex xs6>
                          <v-layout column>
                            <v-card>
                              <v-card-media :src="game.imageURL" height="200px"></v-card-media>
                            </v-card>
                          </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-select v-bind:items="platforms" v-model="game.platform" label="Platform" item-value="text"></v-select>
                            <v-text-field name="players" type="number" label="Players" id="players"></v-text-field>
                            <v-select v-bind:items="companies" v-model="game.publisher" label="Publisher" item-value="text"></v-select>
                            <v-select v-bind:items="companies" v-model="game.developer" label="Developer" item-value="text"></v-select>
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
                    </v-tabs-content>
                    <v-tabs-content
                      key="Details"
                      id="Details"
                    >
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
                    </v-tabs-content>
            <v-tabs-content
              :key="'Hints'"
              :id="'Hints'"
            >
              <h1>Hints</h1>
            </v-tabs-content>
            <v-tabs-content
              :key="'Hands'"
              :id="'Hands'"
            >
              <h1>Hands</h1>
              <div> Game: {{game}}</div>
            </v-tabs-content>
            <v-tabs-content
              :key="'Tags'"
              :id="'Tags'"
            >
              <v-card flat>
                <v-card-text>
                  <v-layout column align-center>
                    <h1>{{ msg }}</h1>
                    <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
                    <blockquote>
                      &#8220;First, solve the problem. Then, write the code.&#8221;
                      <footer>
                        <small>
                          <em>&mdash;John Johnson</em>
                        </small>
                      </footer>
                    </blockquote>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-tabs-content>
                  </v-tabs-items>
                </v-tabs>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-flex>

</template>

<script>
export default {
  name: 'GameDetails',
  props: {
    id: null
  },
  data: () => ({
    game: null,
    msg: 'Message',
    platforms: [
      'PC',
      'Speccy'
    ],
    companies: [
      'Company 1',
      'Company 2'
    ],
    genres: [
      'Genre 1',
      'Genre 2'
    ],

    active: null,
    selectDate: null,
    selectAddDate: null
  }),
  methods: {
    loadGame: function (id) {
      this.$store.dispatch('loadGame', id).then(() => {
        console.log('Game loaded')
        console.log(this.$store.state.message)
        console.log('Game')
        console.log(this.$store.state.game)
        this.game = this.$store.state.game
      })
    },
    saveGame: function () {
      if (!this.game) {
        return
      }
      this.$store.dispatch('saveGame', this.game).then(() => {
        console.log(this.game)
        console.log('Game saved')
        console.log(this.$store.state.game)
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
#gameDetails {
  height: 80vh;
  overflow: auto;
}
</style>

