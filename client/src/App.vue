<template>
<section class="section">
  <Nav />
    <div class="container">
       <router-view />
    </div>
    <Footer/>
</section>
</template>


<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer"

export default {
  components:{
      Nav,
      Footer
    }
}
</script>

<style lang="scss">

</style>
