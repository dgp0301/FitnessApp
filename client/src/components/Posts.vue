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
    <p class="card-footer-item" @click.prevent="commentBox= !commentBox">
      <span class="has-icons">
        Comment 
        <i class="fas fa-comment"></i>
      </span>
    </p>
  </footer>
  <footer class="card-footer" v-if="commentBox">
    <div class="field is-grouped" style="width: 100%">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Type comment here..." v-model="commentText">
      </p>
      <p class="control">
        <a class="button is-primary" @click.prevent="postComment">
          Post
        </a>
      </p>
    </div>
  </footer>
  <footer class="card-footer">
    <div class="media" v-for="c in post.Comments" :key="c.id" style="padding: 5px">
      <div class="media-content">
        <b >{{c.Commenter}} </b>
        <span>{{c.Text}}</span>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import { React, Comment } from "@/models/feed";

export default {
    data: ()=>({
      commentBox: 0,
      commentText: ''
    }),
    props: {
        post: Object
    },
    methods: {
      async react(){
        //console.log(this.post.id);
        await React(this.post.id);
        this.post.Reaction += 1;
      },
      async postComment(){
        Comment(this.commentText, this.post.id)
      }
    }
}
</script>

<style>
  .card{
    margin: 30px;
  }
</style>