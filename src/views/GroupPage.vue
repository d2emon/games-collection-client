<template>
  <v-layout row wrap>
    <v-flex
      xs12
    >
      <game-group
        :group="group"
        :show-text="true"
      />
    </v-flex>
  </v-layout>

</template>

<script>
import GameGroup from '@/components/GameGroup'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GroupPage',
  components: {
    GameGroup
  },
  computed: {
    ...mapState('gameGroups', ['gameGroups', 'group']),
    groupId: function () { return this.$route.params.group }
  },
  methods: {
    ...mapActions('gameGroups', [ 'fetchGroup' ])
  },
  // created: function () { this.fetchGroups() },
  mounted: function () {
    this.fetchGroup(this.groupId)
  }
}
</script>

<style scoped>
</style>
