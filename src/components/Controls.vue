<script setup>
import Hashtag from './Hashtag.vue'

//const emit = defineEmits(['setHashtag'])
defineProps({
    post: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <button>Like</button>
    {{ post.likes }}
    <hashtag
        v-for="hashtag in post.hashtags"
        :key="hashtag" 
        :hashtag="hashtag"
    />
</template>

<style scoped>
</style>
