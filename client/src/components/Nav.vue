<template>
    <nav class="navbar container is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="../assets/logo.png">
          </router-link>
      
          <a role="button" class="navbar-burger burger" :class="{'is-active':isActive}" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isActive}">
          <div class="navbar-start">
            <router-link to="/myexcercise"  class="navbar-item">My Excercises</router-link>
            <router-link to="/feed"  class="navbar-item">Feed</router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link to="/about"  class="navbar-item">About</router-link>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <LoginBadge/>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
  import LoginBadge from "@/components/LoginBadge";

  export default{
    data: ()=> ({
      isActive:false
    }),
    methods:{

    },
    components:{
      LoginBadge
    }
  }
</script>
