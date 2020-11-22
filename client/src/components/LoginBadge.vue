<template>
<div>
    <div class="media" v-if="session.user">
        <div class="media-left" v-if="session.user.handle=='admin'">
            <router-link to="/admin"  class="button is-primary">Admin</router-link>
        </div>
        <div class="media-left" v-else>
            <router-link to="/track"  class="button is-primary">Track Workout</router-link>
        </div>
        <div class="media-content">
            <p class="has-text-weight-bold">{{session.user.FirstName}} {{session.user.LastName}}</p>
            <p class="is-size-7">@{{session.user.PrimaryEmail}}</p>
        </div>
    </div>
    <div class="buttons" v-else>
        <router-link to="/signup"  class="button is-primary"><strong>Sign up</strong></router-link>
        <router-link to="/login"  class="button is-primary">Login</router-link>
    </div>
</div>
</template>

<script>
import { session } from "@/models/session";
export default {
    data: ()=> ({
        session
    })
}
</script>

<style>

</style>