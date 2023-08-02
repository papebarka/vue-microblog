import { reactive } from 'vue'
import { testPosts } from './posts.js'

class Store{
    constructor(){
        this.state = reactive({
            posts: testPosts,
            currentTag: null
        })
    }

    setHashtag(tag){
        this.state.currentTag = tag
    }

    likePost(id){
        this.state.posts.forEach((post) => {
            if (post.id == id){
                post.likes++
            }
        })
    }
}

export const store = new Store()