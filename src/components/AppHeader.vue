<template>
  <v-toolbar fixed app :clipped-left="clipped" color="primary">
    <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click.stop="switchDrawer"></v-toolbar-side-icon>
    <v-btn icon @click.stop="switchMini">
      <v-icon v-html="mini ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-btn icon to="/add">
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn icon @click.stop="">
      <v-icon>file_download</v-icon>
    </v-btn>
    <v-btn icon @click.stop="">
      <v-icon>settings</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="">
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon @click.stop="">
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon @click.stop="">
      <v-icon>videogame_asset</v-icon>
    </v-btn>
    <v-btn icon @click.stop="">
      <v-icon>play_arrow</v-icon>
    </v-btn>
    <v-menu :nudge-width="100">
      <v-toolbar-title slot="activator">
        <span>
          Group by
          <span v-if="selectedGroup">{{ selectedGroup.title }}</span>
        </span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list>
        <v-list-tile v-for="group in groups" :key="group.title" @click="selectedGroup = group">
          <v-list-tile-title v-text="group.title"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn icon @click.stop="switchRight">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    mini: function () { return this.$store.state.menu.mini }
  },
  data: function () {
    return {
      clipped: true,
      title: 'Games Collection',
      selectedGroup: null,
      groups: [
        { title: 'Group 1' },
        { title: 'Group 2' },
        { title: 'Group 3' },
        { title: 'Group 4' },
        { title: 'Group 5' }
      ],

      drawer: this.$store.state.menu.drawer,
      rightDrawer: this.$store.state.menu.rightDrawer
    }
  },
  methods: {
    switchDrawer () { this.$store.commit('menu/switchDrawer') },
    switchMini () { this.$store.commit('menu/switchMini') },
    switchRight () { this.$store.commit('menu/switchRight') }
  }
}
</script>
