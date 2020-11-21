<template>
  <div class="card">
  <div class="card-content">
    <p class="title">
      {{post.Excercise_Type}}
    </p>
    <p class="subtitle">
      {{post.Note}}
    </p>
    <p class="has-text-right">
      @{{post.name}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Sets: {{post.Sets}}
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Reps: {{post.Reps_Per_Set}}
      </span>
    </p>
  </footer>
</div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>
  .card{
    margin: 30px;
  }
</style>