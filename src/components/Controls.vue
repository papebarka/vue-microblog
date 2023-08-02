<script setup>
import Hashtag from './Hashtag.vue'
const emit = defineEmits(['setHashtag'])
defineProps({
    post: {
        type: Object,
        required: true,
    }
})

const setHashtag = (hashtag) => {
    //console.log('inside controls')
    emit('setHashtag', hashtag)
}
</script>

<template>
    <button>Like</button>
    {{ post.likes }}
    <hashtag
        v-for="hashtag in post.hashtags"
        :key="hashtag" 
        :hashtag="hashtag"
        @setHashtag="setHashtag"
    />
</template>

<style scoped>
</style>
