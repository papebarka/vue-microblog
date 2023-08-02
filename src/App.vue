<script setup>
import { computed } from 'vue'
import { store } from './data/store.js'

import Card from './components/Card.vue'
import Controls from './components/Controls.vue'


const setHashtag = ($event) => {
  store.setHashtag($event.target.value)
}

const filteredPosts = computed(() => {
  if (!store.state.currentTag){
    return store.state.posts
  }
  return store.state.posts.filter(
    post => post.hashtags.includes(store.state.currentTag)
  )
})

const currentTag = computed(() => store.state.currentTag)
</script>

<template>
  <input type="text"
    :value="currentTag"
    @input="setHashtag"
    >
  <card
    v-for="post in filteredPosts"
    :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post"/>
    </template>
  </card>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
