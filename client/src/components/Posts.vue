<template>
  <div class="card">
  <div class="card-content">
    <div class="content">
      {{post.Reaction}} people liked this
    </div>

    <p class="title">
      {{post.Exercise_Type}}
    </p>
    <p class="subtitle">
     {{post.Sets}} x {{post.Reps_Per_Set}} {{post.Note}}
    </p>
    <p class="has-text-right">
      @{{post.name}}
    </p>
  </div>
  <footer class="card-footer" style = "cursor:pointer">
    <p class="card-footer-item" @click.prevent="react">
      <span class="has-icons">
        Like
        <i class="fas fa-heart"></i>
      </span>
    </p>
    <p class="card-footer-item">
      <span class="has-icons">
        Comment 
        <i class="fas fa-comment"></i>
      </span>
    </p>
  </footer>
</div>
</template>

<script>
import { React, Comment } from "@/models/feed";

export default {
    props: {
        post: Object
    },
    methods: {
      async react(){
        //console.log(this.post.id);
        await React(this.post.id);
        this.post.Reaction += 1;
      }
    }
}
</script>

<style>
  .card{
    margin: 30px;
  }
</style>