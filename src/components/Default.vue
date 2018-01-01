<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Games</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="">
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs8>
      <v-layout row wrap>
        <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs3>
                <v-text-field
                  name="game-id"
                  label="Game ID"
                  id="gameid"
                ></v-text-field>
              </v-flex>
              <v-flex xs9>
                <v-text-field
                  name="title"
                  label="Game Title"
                  id="title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-tabs v-model="active">
                  <v-tabs-bar class="primary" dark>
                    <v-tabs-item
                      v-for="tab in tabs"
                      :key="tab"
                      :href="'#' + tab"
                      ripple
                    >
                      {{ tab }}
                    </v-tabs-item>
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
                              <v-card-text>
                                <img :src="game.image">
                              </v-card-text>
                            </v-card>
                          </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-select v-bind:items="platforms" v-model="game.platform" label="Platform" item-value="text"></v-select>
                            <v-text-field name="players" type="number" label="Players" id="players"></v-text-field>
                            <v-select v-bind:items="companies" v-model="game.publisher" label="Publisher" item-value="text"></v-select>
                            <v-select v-bind:items="companies" v-model="game.developer" label="Developer" item-value="text"></v-select>
                            <v-text-field name="release" label="Release" id="release"></v-text-field>
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
                                label="Picker in menu"
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
                            <v-text-field multi-line name="description" label="Description" id="description"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-tabs-content>
            <v-tabs-content
              :key="'Details'"
              :id="'Details'"
            >
              <h1>Details</h1>
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
  </v-layout>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({
    msg: 'Welcome to Your Vue.js App',
    items: [
      { title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
      { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
      { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
      { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' },
    ],
    tabs: [
      'Common',
      'Details',
      'Hints',
      'Hands',
      'Tags'
    ],
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
    game: {
      image: '/static/doc-images/lists/2.jpg'
    },

    active: null,
    selectDate: null
  })
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
</style>
