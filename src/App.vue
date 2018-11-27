<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div>
      <app-footer></app-footer>
    </div>
  </div>

</template>


<script>
  import Footer from './pages/footer'
export default {
  components:{
    "app-footer":Footer
  }
}
</script>

<style>

</style>
