<template>
  <v-card
    class="hide-text"
    :to="to"
  >
    <template v-if="group">
      <v-card-title>
        <h1 v-text="group.title"></h1>
      </v-card-title>
      <v-img
        contain
        :height="imageHeight"
        :src="group.src"
      >
      </v-img>
      <v-card-text
        class="group-description"
      >
        <div
          v-html="group.description"
        ></div>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
import TextCard from '@/components/TextCard';

export default {
  name: 'GameGroupSmall',
  components: {
    TextCard,
  },
  props: {
    group: Object,
    to: String,
    imageHeight: {
      type: String,
      default: '200px'
    },
  }
};
</script>

<style scoped>
  .group-description {
    /*
    text-overflow: ellipsis;
    white-space: nowrap;
    */
    text-align: justify;
  }
  .hide-text .group-description {
    overflow: hidden;
    height: 14ex;
  }
</style>
