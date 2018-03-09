const state = {
  drawer: true,
  mini: true,
  rightDrawer: false,
  menu: [
    { heading: 'File' },
    { icon: 'domain', text: 'Companies', to: '/companies' },
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
  ]
}

const mutations = {
  setDrawer (state, value) {
    state.drawer = value
  },
  switchDrawer (state) {
    state.drawer = !state.drawer
  },
  switchMini (state) {
    state.mini = !state.mini
  },
  switchRight (state) {
    state.rightDrawer = !state.rightDrawer
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations
  // actions
}
