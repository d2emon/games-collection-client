<template>
  <v-app id="games">
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="$vuetify.breakpoint.width > 1264" v-model="drawer" class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <template v-if="item.heading">
            <v-layout
              row
              v-if="!miniVariant"
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
            <v-expansion-panel v-if="!miniVariant">
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
    <v-toolbar fixed app :clipped-left="clipped" color="primary">
      <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
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
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height grid-list-md class="grey lighten-4">
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed 
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
  data: () => ({
    clipped: true,
    drawer: true,
    fixed: false,
    items: [
      { heading: 'File' },
      { icon: 'add', text: 'Add Item', to: '/add' },
      { icon: 'list', text: 'Properties' },
      { icon: 'pan_tool', text: 'On hands' },
      { icon: 'bubble_chart', text: 'Inspire' },
      { icon: 'lightbulb_outline', text: 'Notes' },
      { icon: 'touch_app', text: 'Reminders' },
      { divider: true },
      { icon: 'file_upload', text: 'Import' },
      { icon: 'file_download', text: 'Export' },
      { icon: 'archive', text: 'Archive' },
      {
        icon: 'restore',
        text: 'Last Collections',
        subitems: [
          { text: 'Collection1' },
          { text: 'Collection2' },
          { text: 'Collection3' },
          { text: 'Collection4' },
          { text: 'Collection5' }
        ]
      },
      { divider: true },
      { heading: 'Edit' },
      { icon: 'content_copy', text: 'Duplicate' },
      { icon: 'select_all', text: 'Select All' },
      { icon: 'delete', text: 'Delete' },
      { divider: true },
      { icon: 'mode_edit', text: 'Rename Fields' },
      { divider: true },
      { icon: 'find_replace', text: 'Find and Replace' },
      { divider: true },
      { icon: 'block', text: 'Fix Collection' },
      { divider: true },
      { heading: 'Filter' },
      { text: 'Platform' },
      { text: 'Genre' },
      { text: 'Rating' },
      { text: 'Tags' },
      { text: 'Favourites' },
      { divider: true },
      { icon: 'bubble_chart', text: 'Saved Searches' },
      { icon: 'search', text: 'Search' },
      { icon: 'bubble_chart', text: 'Advanced Search' },
      { icon: 'videogame_asset', text: 'Tonight' },
      { divider: true },
      { icon: 'refresh', text: 'Show All' },
      { divider: true },
      { heading: 'Settings' },
      { icon: 'settings', text: 'Settings' },
      { icon: 'bubble_chart', text: 'Display' },
      { icon: 'bubble_chart', text: 'Toolbar Controls' },
      { divider: true },
      { icon: 'help', text: 'Information' },
      { icon: 'bubble_chart', text: 'Default' },
      { icon: 'bubble_chart', text: 'Borrowers' },
      { divider: true },
      { heading: 'Labels', editing: true },
      { icon: 'add', text: 'Create new label' },
      { divider: true },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Keyboard shortcuts' }
    ],
    groups: [
      { title: 'Group 1' },
      { title: 'Group 2' },
      { title: 'Group 3' },
      { title: 'Group 4' },
      { title: 'Group 5' }
    ],
    selectedGroup: null,
    miniVariant: true,
    right: true,
    rightDrawer: false,
    title: 'Games Collection'
  })
}
</script>

<style>
#keep main .container {
  height: 660px;
}

.navigation-drawer__border {
  display: none;
}

.text {
  font-weight: 400;
}
</style>
