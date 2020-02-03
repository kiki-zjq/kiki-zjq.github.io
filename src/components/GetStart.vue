<template>
    <div class="wrapper">
        <div id="started">
            Get Started
            <i class="el-icon-bottom"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
}
$(window).scroll( function() {
        if(document.documentElement.scrollTop>=100){
            $("#started").fadeOut(500);
           //console.log(document.documentElement.scrollTop);
        }
        else{
            $("#started").fadeIn(500);
        }
    } );//这一段以后优化一下，加一个回调函数让他不要一直在那里判断
</script>
<style scoped>
    .wrapper{
        width:100%;
        height:13vh;
        text-align: center;
        line-height: 3em;
        padding-top:3vh;
    }
    #started{
        font-size:40px;
        font-weight: bold;
    }
</style>