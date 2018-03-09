<template>
  <v-layout row wrap>
    <v-card flat>
      <v-card-text>
        <v-layout column align-center>
          <h1>{{ msg }}</h1>
          <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'GameDetailsTags',
  props: [
    'game'
  ],
  data: function () {
    return {
      msg: 'Message'
    }
  }
}
</script>
