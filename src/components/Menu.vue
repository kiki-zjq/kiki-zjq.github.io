<template>
         <el-menu
      default-active="1"
      class="el-menu-vertical-demo main-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fafafa"
      text-color="#000"
      active-text-color="#ff4f4f"
      >

      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->

      <el-menu-item index="1" @click='handleClick(1)'>
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="2" @click='handleClick(2)'>
        <i class="el-icon-menu"></i>
        <span slot="title">简历</span>
      </el-menu-item>

      <el-menu-item index="3" @click='handleClick(3)'>
        <i class="el-icon-document"></i>
        <span slot="title">经历</span>
      </el-menu-item>

      <el-menu-item index="4" @click='handleClick(4)'>
        <i class="el-icon-setting"></i>
        <span slot="title">其他</span>
      </el-menu-item>

    </el-menu>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(index){
          if(index==2){
            this.$router.push('/resume');
          }else if(index==3){
            this.$router.push('/experience');
          }else if(index==4){
            this.$router.push('/others');
          }else if(index==1){
            this.$router.push('/');
          }
      }
    }
  };
</script>

<style >

ul.el-menu-vertical-demo.main-menu.el-menu{
    padding-left:5%;
    font-size:20px;
    font-weight:bold;
    border-color:"#fafafa";
    border-radius:20px;
    text-align: left;
    background-color:"#fafafa";
}
.fix{
  position:fixed;
}
</style>
