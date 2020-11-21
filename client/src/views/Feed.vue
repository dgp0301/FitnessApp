<template>
  <div class="columns">
  <div class="column is-two-thirds">
    <Posts v-for="(x,i) in workouts"
    :key="i"
    :i="i"
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
import { getWorkouts } from "@/models/feed";

export default {
    data(){
        return{
            workouts: []
        }
    },
    async created(){
      this.workouts = await getWorkouts();
    },
    components:{
        Friendslist, Posts
    }
}
</script>

<style>

</style>