<template>
  <v-card>
    <v-card-title v-if="page.title">
      <h1 v-text="page.title"></h1>
    </v-card-title>
    <v-card-text v-html="page.html"></v-card-text>
    <hr />
    <div v-html="html"></div>
    {{html}}
  </v-card>
</template>

<script>
  export default {
    name: 'TextCard',
    props: [
      'page',
      'html'
    ]
  }
</script>

<style scoped>

</style>
