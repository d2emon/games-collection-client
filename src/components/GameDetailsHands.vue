<template>
  <v-layout row wrap>
    <h1>Hands</h1>
    <div> Game: {{game}}</div>
  </v-layout>
</template>

<script>
export default {
  name: 'GameDetailsHands',
  props: [
    'game'
  ],
  data: function () {
    return {
    }
  }
}
</script>
