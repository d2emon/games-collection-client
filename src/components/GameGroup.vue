<template>
  <v-card
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
        <v-layout row wrap>
          <v-flex
            xs6
          >
            <div
              v-html="group.description"
            ></div>
            <v-list>
              <v-list-tile
                v-for="slug in Object.keys(group.wiki)"
                :key="slug"
                :to="`/wiki/${group.slug}/${slug}`"
              >
                <v-list-tile-content>
                  <v-list-tile-title v-text="group.wiki[slug].title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs6>
            <text-card
              :page="group.page"
            >
              <v-layout row wrap>
                <slot></slot>
              </v-layout>
            </text-card>
          </v-flex>
          <v-flex
            xs12
            v-html="group.text"
          ></v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn>
          Button
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>

</template>

<script>
import TextCard from '@/components/TextCard';

export default {
  name: 'GameGroup',
  components: {
    TextCard,
  },
  props: {
    group: Object,
    to: String,
    imageHeight: {
      type: String,
      default: '200px',
    },
  },
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
