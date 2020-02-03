<template>
  <div id="app">
    <IntroPage />
    <GetStart />
    
    <el-row>
      <el-col :span="4" :offset="2"> 
        <div class="menu">
          <Menu />
        </div>
      </el-col>
      <el-col :span="14" :offset="2">
        <router-view/>
      </el-col>
    </el-row>

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
};
$(window).scroll( function() {
        if(document.documentElement.scrollTop>=400){
            $("el-menu").addClass("fix");
           //console.log(document.documentElement.scrollTop);
        }
        else{
             $("el-menu").removeClass("fix");
        }
    } );//这一段以后优化一下，加一个回调函数让他不要一直在那里判断
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
/* .main-part{
  position:relative;
}
Menu{
  position:absolute;
} */

</style>
