<template>
<div class="level section">
<div class="level-item">
<form>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Username" v-model="username">
    <span class="icon is-small is-left">
      <i class="fas fa-at"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" @click.prevent="login">
      Login
    </button>
  </p>
</div>
</form>
</div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
  data: ()=>({
    username: ""
  }),
  methods: {
    login(){
      session.user=session.users.find(x => x.handle == this.username)
      this.$router.push('feed');
    },
  }
}
</script>

<style>

</style>