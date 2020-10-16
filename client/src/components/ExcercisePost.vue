<template>
  <div class="card">
  <div class="card-content">
    <p class="title">
      {{post.workoutType}}
    </p>
    <p class="subtitle">
      {{post.description}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Sets: {{post.sets}}
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Reps: {{post.reps}}
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

</style>