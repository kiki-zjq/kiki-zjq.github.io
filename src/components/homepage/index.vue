<template>
    <div class="homepage-block">
        <h2>HOMEPAGE 首页</h2>
        <div class="divider"></div>
        
        <div class="sub-title">About Me</div>
            <div class="homepage-content">
                
            </div>
        
        <div class="sub-title">相关技能树</div>
            <div class="homepage-content">
                <RectTreeChart/>
            
            </div>
        
        <div class="sub-title">联系方式</div>
            <div class="homepage-content">
                <b>邮箱: </b>zhujiangqi@bupt.edu.cn <br/><br/>
                <b>Github: </b>
            </div>
        
    </div>
</template>

<script>
import RectTreeChart from './components/RectTreeChart';
export default {
  components:{
      RectTreeChart,
  }
}
</script>

<style scoped>
    .homepage-block{
        text-align: left;
    }
    .divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 200px;
        margin-top: -18px;
    }
    .sub-title{
        margin-top:5%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }
    .homepage-content{
        margin-top:5%;
        width:100%;
        
        height:400px;
    }
</style>