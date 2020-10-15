<template>
  <div class="columns">
      <div class="column is-half">
        <strong>User Stuff</strong>
        <form>
          Deleting Users
        <!-- Deleting Users -->
        <div class="field has-addons">
        <div class="control is-expanded">
        <div class="select is-fullwidth">
            <select name="users" v-model="selectedUser">
                <option v-for ="(x,i) in session.users"
                :key="i">
                {{x.handle}}
                </option>
              </select>
        </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-success">Delete</button>
        </div>
        </div>
        </form>
        <!-- Adding Users -->
        <form style="padding-top:30px">
          Adding Users
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input" type="input" placeholder="Name" v-model="addedUser">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                    <input class="input" type="input" placeholder="Username" v-model="addedHandle">
                    <span class="icon is-small is-left">
                        <i class="fas fa-at"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" @click.prevent="addUser">
                        Add
                        </button>
                    </p>
                </div>
          </form>
      </div>
      <div class="column is-half">
        <strong>Workouts Stuff</strong>
        <form>
          Deleting Workouts
        <!-- Deleting Workouts -->
        <div class="field has-addons">
        <div class="control is-expanded">
        <div class="select is-fullwidth">
            <select name="workouts" v-model="selectedWorkout" >
                <option>Select a Workout</option>
                <option v-for ="(x,i) in workouts.types"
                :key="i">
                {{x}}
                </option>
              </select>
        </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-success" @click.prevent="ridWorkout">Delete</button>
        </div>
        </div>
        </form>
        <!-- Adding workouts -->
        <form style="padding-top:30px">
          Adding workouts
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Workout" v-model="addedWorkout">
                    <span class="icon is-small is-left">
                    <i class="fas fa-dumbbell"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" @click.prevent="addWorkout">
                        Add
                        </button>
                    </p>
                </div>
          </form>
      </div>
  </div>
</template>

<script>
import workouts from '@/models/workout';
import session from '@/models/session';
export default {
  data: ()=>({
    workouts,
    session,
    selectedWorkout:'',
    addedWorkout:'',
    selectedUser:'',
    addedUser:'',
    addedHandle:''
  }),
  methods:{
    ridWorkout(){
      workouts.deleteType(this.selectedWorkout);
    },
    addWorkout(){
      workouts.addType(this.addedWorkout);
    },
    ridUser(){
      session.deleteUser(this.selectedUser);
    },
    addUser(){
      session.addUser(this.addedUser, this. addedHandle);
    },
  }

}
</script>

<style>

</style>