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
    <a class="panel-block is-active is-grouped " v-for="(x,i) in friends.x.pending"
                                    :key="i"
                                    :friend="x" style="width: 100%">
      <span class="panel-icon">
        <i class="fas fa-question is-left" aria-hidden="true"></i>
      </span>
    <span class="control is-expanded">{{x.Name}}</span>
    <span class="icon is-small is-right" @click.prevent="denyRequest" >
      <i class="fas fa-minus" @click.prevent="requestId=x.id "></i>
    </span>
    <span class="icon is-small is-right" @click.prevent="acceptRequest">
      <i class="fas fa-check" style="padding-left: 5px" @click.prevent="requestId=x.id" ></i>
    </span>
    
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
import { getFriends, denyFollower, acceptFollower } from '@/models/feed'
export default {
  data: ()=>({
    friends: [],
    followingPressed: true,
    requestId: +''
  }),
  async created(){
    this.friends = await getFriends();
  },
  methods:{
    acceptRequest(){
      console.log(this.requestId);
      acceptFollower(this.requestId);
    },
    denyRequest(){
      console.log(this.requestId);
      denyFollower(this.requestId)
    }
  }

}
</script>

<style>
#pim{
  float: right;
  text-align: right;
}

</style>