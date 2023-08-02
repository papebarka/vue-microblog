<script setup>
import { store } from '../data/store.js'

const props = defineProps({
    hashtag: {
        type: String,
        required: true
    }
})

const setHashtag = () => {
    //console.log('Inside Hashtag')
    store.setHashtag(props.hashtag)
}
</script>

<template>
    <div
        class="hashtag"
        @click="setHashtag"
    >
        #{{ hashtag }}
    </div>
</template>

<style scoped>
.hashtag {
    text-decoration: underline;
}

.hashtag:hover {
    color: cornflowerblue;
}
</style>