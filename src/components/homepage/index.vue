<template>
    <div class="homepage-block">
        <h2>HOMEPAGE 首页</h2>
        <div class="divider"></div>
        
        <div class="sub-title">About Me</div>
            <div class="homepage-content">
                <p>作者朱江奇，北京邮电大学17级在读，电信工程及管理专业。</p><br/>
                <p>非科班出身，但是对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。</p><br/>
            </div>
        
        <div class="sub-title" id='skill'>相关技能树</div>
            <div class="homepage-content">
                <RectTreeChart/>
            
            </div>
        
        <div class="sub-title" id='contact'>联系方式</div>
            <div class="homepage-content">
                <b>邮箱: </b>zhujiangqi@bupt.edu.cn <br/><br/>
                <b>Github: </b><a href="https://github.com/kiki-zjq" target="_blank">https://github.com/kiki-zjq</a><br/><br/>
                <b>手机号:</b>18810701233<br/><br/>
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
        font-size:16px;
        height:400px;
    }
</style>