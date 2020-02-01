<template>
  <div id="app">
    <IntroPage />
    <GetStart />
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import IntroPage from '@/components/Intro'
import GetStart from '@/components/GetStart'
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components:{
    IntroPage,
    GetStart,
    Menu,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
