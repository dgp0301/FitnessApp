<template>
  <div class="columns">
  <div class="column is-two-thirds">
    <Posts v-for="(x,i) in posts"
    :key="i"
    :post="x"/>
  </div>
  <div class="column is-one-thirds">
    <Friendslist/>
  </div>
  </div>
</template>

<script>
import Friendslist from '@/components/Friendslist';
import Posts from '@/components/Posts';
import { posts } from "@/models/feed";

export default {
    data(){
        return{
            posts
        }
    },
    components:{
        Friendslist, Posts
    }
}
</script>

<style>

</style>