<template>
  <div class="">
      <h1 class="title is-1 has-text-centered">{{session.user.FirstName}}'s Excercises</h1>
      <Posts v-for="(x,i) in workouts" 
                    :key="i"
                    :post="x"/>
  </div>
</template>

<script>
import Posts from '@/components/Posts'
import { session } from '@/models/session'
import { getMyWorkouts } from "@/models/feed";
export default {
    components:{
        Posts
    },
    data:()=>({
        session,
        workouts:[]
    }),
    async created(){
        this.workouts = await getMyWorkouts();
    },
}
</script>

<style>

</style>