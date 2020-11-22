<template>
  <nav class="panel">
  <p class="panel-heading has-icons-left">
    <span class="icon is-left">
      <i class="fas fa-users" aria-hidden="true"></i>
    </span>
    Friends
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">Current</a>
    <a>Suggested</a>
  </p>
  <a class="panel-block is-active" v-for="(x,i) in friends.x"
                                  :key="i"
                                  :friend="x">
    <span class="panel-icon">
      <i class="fas fa-user" aria-hidden="true"></i>
    </span>
    {{x.Name}}
  </a>
</nav>
</template>

<script>
import { session } from "@/models/session";
import { getFriends } from '@/models/feed'
export default {
  data: ()=>({
    friends: []
  }),
  async created(){
    this.friends = await getFriends();
  }

}
</script>

<style>

</style>