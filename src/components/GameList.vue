<template>
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
    <v-list id="gameList">
      <v-list-tile avatar v-for="item in items" v-bind:key="item._id" @click="selectGame(item._id)">
        <v-list-tile-content>
          <v-list-tile-title v-if="item.name" v-text="item.name"></v-list-tile-title>
          <v-list-tile-title v-else v-text="'Untitled'"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-avatar v-if="item.imageURL">
          <img v-bind:src="item.imageURL"/>
        </v-list-tile-avatar>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({
    items: []
  }),
  methods: {
    selectGame (id) {
      this.$emit('select', { id: id })
    },
    refreshGames () {
      this.$store.dispatch('game/refreshMessage').then(() => {
        console.log('Games refreshed')
        console.log(this.$store.state.game.message)
        this.items = this.$store.state.game.message
      })
    }
  },
  mounted: function () {
    this.refreshGames()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
#gameList {
  height: 80vh;
  overflow: auto;
}
</style>

