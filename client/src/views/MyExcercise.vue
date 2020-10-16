<template>
  <div class="">
      <h1 class="title is-1 has-text-centered">{{session.user.name}}'s Excercises</h1>
      <Posts v-for="(x,i) in session.workouts" 
                    :key="i"
                    :post="x"/>
  </div>
</template>

<script>
import Posts from '@/components/Posts'
import session from '@/models/session'
export default {
    components:{
        Posts
    },
    data:()=>({
        session
    })
}
</script>

<style>

</style>