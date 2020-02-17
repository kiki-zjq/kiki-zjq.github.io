<template>
    <div class="intro-page">
        <div class="title">
            <h1 class="user-name">KiKi-zjq</h1>
            <h2>Personal Resume</h2>
            <el-button type="danger" round>危险按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </div>
        <div class="logo-part">
            <!--此处以后加一个logo的img-->
        </div>
    </div>
</template>

<script>
export default {
    name:'IntroPage',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.intro-page{
    position: relative;
    margin-top:-60px;
    width:100%;
    height:85vh; 
    border:black 2px solid;
    border-radius:0 0 20px 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 1px, transparent 1px), 
                linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px) 
                rgb(54, 54, 69);
    background-size:50px 50px;
}

.title{
    text-align: right;
    position:relative;
    color:white;
    top:25%;
    left:-50%;
}
.user-name{
    font-size: 65px;
    font-weight: 600;
    line-height: 65px;
    font-family: system-ui,sans-serif;
}

.logo-part{
    position: absolute;
    top: 20%; right: 20%; 
    width:23%;
    padding-top:23%;
    height:0;
    background-color: white;
    border-radius:50%;

}
</style>