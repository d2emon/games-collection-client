<template>
  <text-card
    :page="page"
  ></text-card>
</template>

<script>
import TextCard from '@/components/TextCard'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'WikiPage',
  components: {
    TextCard
  },
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
