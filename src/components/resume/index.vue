<template>
    <div class='resume-block'>
        <h2>Resume 简历</h2>
        <div class='divider'></div>
            <a class='downloader' href='../../static/data/Resume.pdf' download='Resume.pdf'>
                <el-button type="warning" icon="el-icon-download" circle></el-button>
            </a>
        <div class='resume-content'>
            <img src="./resume.png" width='800px'/>
        
        </div>
    </div>
</template>

<script>
export default {
    
}

$(window).scroll( function() {
        if(document.documentElement.scrollTop<=130){
            $(".downloader").fadeOut(500);
           //console.log(document.documentElement.scrollTop);
        }
        else{
            $(".downloader").fadeIn(500);
        }
    } );

</script>
<style scoped>
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 160px;
        margin-top: -18px;
        margin-bottom: 5%;
    }
.resume-block{
    text-align: left
}
.downloader{
    position:fixed;
    right:8%;
    bottom:10%;
}
</style>