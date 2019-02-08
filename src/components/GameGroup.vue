<template>
  <v-card
    :class="showText ? '' : 'hide-text'"
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
        <template v-if="showText">
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
          <div
            v-html="group.text"
          ></div>
          <text-card
            v-if="group.page"
            :page="group.page"
          >
            <slot></slot>
          </text-card>
        </template>
      </v-card-text>
      <v-card-actions v-if="showText">
        <v-btn>
          Button
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>

</template>

<script>
import TextCard from '@/components/TextCard'

export default {
  name: 'GameGroup',
  components: {
    TextCard
  },
  props: {
    group: Object,
    to: String,
    imageHeight: {
      type: String,
      default: '200px'
    },
    showText: {
      type: Boolean,
      default: false
    }
  }
}
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
