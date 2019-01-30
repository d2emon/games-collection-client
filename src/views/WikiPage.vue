<template>
  <v-card>
    <v-card-title>
      <h1 v-html="page.title"></h1>
    </v-card-title>
    <v-card-text v-html="page.html"></v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'WikiPage',
  computed: {
    ...mapState('wiki', ['page']),
    groupId: function () { return this.$route.params.group },
    pageId: function () { return this.$route.params.page }
  },
  methods: {
    ...mapActions('wiki', [ 'fetchPage' ])
  },
  // created: function () { this.fetchGroups() },
  mounted: function () {
    this.fetchPage({
      groupId: this.groupId,
      pageId: this.pageId
    })
  }
}
</script>

<style>
blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}
</style>
