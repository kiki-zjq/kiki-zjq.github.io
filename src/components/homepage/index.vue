<template>
    <div class="homepage-block">
        <h2>HOMEPAGE 首页</h2>
        <div class="divider"></div>
        
        <div class="sub-title">关于作者</div>
            <div class="homepage-content">
                <p>作者朱江奇，北京邮电大学2017级在读，电信工程及管理专业。目前专业排名第一 （1/326）</p><br/>
                <p>对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。</p><br/>
                <p>日常喜欢应用新学到的知识做一些小的项目的编写，希望能籍由此巩固知识并提升自己的代码能力。</p><br />
                <p>最后，本项目是一个从零开始搭建的个人主页，页面布局仿照了react-spring官网（<a href='https://www.react-spring.io/'>https://www.react-spring.io/</a>）.</p><br />
                <p>项目搭建在github page上，其中使用到了诸如vue,vue-router,element-ui,e-charts等技术。同时为了解析json文件也进行了axios封装。</p><br />
                <p>本网站可能还有诸多不足，但希望伴随着自己的技能成长可以进一步的完善填充它。</p><br />
                <p>最后！24小时在线求职求实验室求求了QnQ（<a style='color:black;font-weight:bold' href='#/#contact'>联系方式</a>）</p>
            </div>
        
        <div class="sub-title" id='skill'>相关技术栈</div>
            <div class="homepage-content">
                <RectTreeChart class='rect-tree-chart'/>
            
            </div>
        
        <div class="sub-title" id='contact'>联系方式</div>
            <div class="homepage-content">
                <b>邮箱: </b><span style='margin-left:26px'>zhujiangqi@bupt.edu.cn</span><br />
                <span style="margin-left:64px;">zhujiangqi@outlook.com</span><br/><br/>
                <b>Github: </b>
                <a style="color:black;" href="https://github.com/kiki-zjq" target="_blank">https://github.com/kiki-zjq</a><br/><br/>
                <b>手机号:</b><span style='margin-left:20px'>18810701233</span><br/><br/>
            </div>
        
    </div>
</template>

<script src="https://kit.fontawesome.com/20e781ec47.js" crossorigin="anonymous"></script>
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
        font-family:'Verdana','Microsoft YaHei';
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
        font-size:14px;
        min-height:400px;
    }
    .homepage-content p{
        margin-top:-5px;
    }
    .rect-tree-chart{
        margin-top:-75px;
    }

</style>