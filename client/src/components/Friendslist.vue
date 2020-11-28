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
    <a  :class="{'is-active':followingPressed}" @click="followingPressed=true">Following</a>
    <a  :class="{'is-active':!followingPressed}" @click="followingPressed=false">Followers</a>
  </p>
  <div v-if="followingPressed==true">
  <a class="panel-block " v-for="(x,i) in friends.x.following"
                                  :key="i"
                                  :friend="x">
    <span class="panel-icon" >
      <i class="fas fa-user" aria-hidden="true"></i>
    </span>
    {{x.Name}}
  </a>
  </div>
  <div v-if="followingPressed==false">
    <a class="panel-block is-active " v-for="(x,i) in friends.x.pending"
                                    :key="i"
                                    :friend="x">
      <span class="panel-icon">
        <i class="fas fa-question is-left" aria-hidden="true"></i>
      </span>
    {{x.Name}}
    <div class="field"><button class="button is-pulled-right">why </button></div>
    
    </a>
  <a class="panel-block is-active" v-for="(x,i) in friends.x.follower"
                                  :key="i"
                                  :friend="x">
    <span class="panel-icon">
      <i class="fas fa-user" aria-hidden="true"></i>
    </span>
    {{x.Name}}
  </a>
  </div>
</nav>
</template>

<script>
import { session } from "@/models/session";
import { getFriends } from '@/models/feed'
export default {
  data: ()=>({
    friends: [],
    followingPressed: true
  }),
  async created(){
    this.friends = await getFriends();
  }

}
</script>

<style>
#pim{
  float: right;
  text-align: right;
}

</style>