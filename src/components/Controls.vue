<script setup>
import { store } from '../data/store.js'
import Hashtag from './Hashtag.vue'

//const emit = defineEmits(['setHashtag'])
const props = defineProps({
    post: {
        type: Object,
        required: true,
    }
})

const likePost = () => {
    store.likePost(props.post)
}

</script>

<template>
    <button @click="likePost">Like</button>
    {{ post.likes }}
    <hashtag
        v-for="hashtag in post.hashtags"
        :key="hashtag" 
        :hashtag="hashtag"
    />
</template>

<style scoped>
</style>
