<script setup>
const emit = defineEmits(['setHashtag'])
const props = defineProps({
    hashtag: {
        type: String,
        required: true
    }
})

const setHashtag = () => {
    //console.log('Inside Hashtag')
    emit('setHashtag', props.hashtag)
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