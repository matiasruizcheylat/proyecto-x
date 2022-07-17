
<template>
  <div id="app">
    <Head/>
    <Navbar/>
    <router-view/>

    <div class="footer"></div>
    
  </div>



</template>

<script>
import Head from './components/Head'; 
import Navbar from './components/Navbar';

export default {
  components: { Navbar, Head },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
