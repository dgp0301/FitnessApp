<template>
<form>
<div class="field">
  <label class="label">Workout type</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select a workout</option>
        <option v-for ="(x,i) in workouts.types"
        :key="i">
        {{x}}
        </option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Brief Workout Description"></textarea>
  </div>
</div>

<div class="field">
    <div class="control">
    <div class="file has-name is-left">
        <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
            <span class="file-icon">
                <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
                Choose a file…
            </span>
            </span>
            <span class="file-name">
            Image of Workout
            </span>
        </label>
    </div>
    </div>
</div>


<div class="field is-grouped is-grouped-centered">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</form>
</template>

<script>
import workouts from "@/models/workout";
export default {
    data(){
        return{
            workouts
        }
    },
}
</script>

<style>

</style>