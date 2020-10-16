<template>
<form>
<div class="field">
  <label class="label">Workout type</label>
  <div class="control">
    <div class="select">
      <select v-model="workoutType">
        <option>Select a workout</option>
        <option v-for ="(x,i) in workouts.types"
        :key="i">
        {{x}}
        </option>
      </select>
    </div>
  </div>
</div>
<div class="columns">
  <div class="field column is-half">
    <label class="label">Sets</label>
    <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Sets" v-model="sets">
    <span class="icon is-small is-left">
      <i class="fas fa-dumbbell"></i>
    </span>
   </p>
  </div>
  <div class="field column is-half">
    <label class="label">Reps</label>
    <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Reps" v-model="reps">
    <span class="icon is-small is-left">
      <i class="fas fa-dumbbell"></i>
    </span>
   </p>
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Brief Workout Description" v-model="description"></textarea>
  </div>
  {{description}}
</div>

<div class="field">
    <div class="control">
    <div class="file has-name is-left">
        <label class="file-label">
            <input class="file-input" type="file" name="picture">
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
    <button class="button is-link" @click.prevent="trackWorkout">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</form>
</template>

<script>
import workouts from "@/models/workout";
import session from '@/models/session';
export default {
    data:()=>({
      workouts,
      workoutType:'',
      sets:'',
      reps:'',
      description:''
    }),
    methods: {
      trackWorkout(){
        session.addWorkout(this.workoutType,this.sets,this.reps,this.description);
      }
    }
}
</script>

<style>

</style>