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
            <select name="country">
                <option v-for ="(x,i) in session.users"
                :key="i">
                {{x.handle}}
                </option>
              </select>
        </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-primary">Delete</button>
        </div>
        </div>
        </form>
        <!-- Adding Users -->
        <form style="padding-top:30px">
          Adding Users
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                        Login
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
            <select name="workouts" v-model="selectedWorkout">
                <option v-for ="(x,i) in workouts.types"
                :key="i">
                {{x}}
                </option>
              </select>
        </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-primary" @click.prevent="ridWorkout">Delete</button>
        </div>
        {{selectedWorkout}}
        </div>
        </form>
        <!-- Adding workouts -->
        <form style="padding-top:30px">
          Adding workouts
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                        Login
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
    selectedWorkout:''
  }),
  methods:{
    ridWorkout(){
      workouts.deleteType(this.selectedWorkout);
    }
  }

}
</script>

<style>

</style>