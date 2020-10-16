<template>
  <div class="">
      <h1 class="title is-1 has-text-centered">{{session.user.name}}'s Excercises</h1>
      <ExcercisePost v-for="(x,i) in session.workouts" 
                    :key="i"
                    :post="x"/>
  </div>
</template>

<script>
import ExcercisePost from '@/components/ExcercisePost'
import session from '@/models/session'
export default {
    components:{
        ExcercisePost
    },
    data:()=>({
        session
    })
}
</script>

<style>

</style>