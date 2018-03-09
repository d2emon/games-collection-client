<template>
  <v-navigation-drawer
    fixed
    :mini-variant.sync="mini"
    :clipped="$vuetify.breakpoint.width > 1264"
    v-model="drawer"
    class="grey lighten-4"
    app
  >
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <template v-if="item.heading">
          <v-layout
            row
            v-if="!mini"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right" v-if="item.editing">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
        </template>
        <v-divider
          dark
          v-else-if="item.divider"
          class="my-4"
          :key="i"
        ></v-divider>
        <template v-else-if="item.subitems">
          <v-expansion-panel v-if="!mini">
            <v-expansion-panel-content>
              <v-list-tile
                :key="i"
                value="true"
                slot="header"
              >
                <v-list-tile-action v-if="item.icon">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="grey--text">
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <v-list dense class="grey lighten-4">
                    <template v-for="(subitem, j) in item.subitems">
                      <v-list-tile
                        :key="j"
                        @click=""
                        value="true"
                      >
                        <v-list-tile-action v-if="subitem.icon">
                          <v-icon>{{ subitem.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title class="grey--text">
                            {{ subitem.text }}
                          </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
        <v-list-tile
          :key="i"
          v-else
          :to="item.to"
          @click=""
          value="true"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    mini: function () { return this.$store.state.menu.mini },
    visible: function () { return this.$store.state.menu.drawer }
  },
  data: function () {
    return {
      drawer: this.$store.state.menu.drawer,
      items: this.$store.state.menu.menu
    }
  },
  watch: {
    visible: function (value) { this.drawer = value },
    drawer: function (value) { this.$store.commit('menu/setDrawer', value) }
  }
}
</script>
