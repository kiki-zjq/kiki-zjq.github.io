<template>
    <div class="project-block">
        <h2>Project 项目</h2>
        <div class="divider"></div>
        <!--------------------------------------------------------------------------------------------->
        <!-- <div class="sub-title">Responsive Web Design</div> -->
            <div class="project-content">

                <el-row gutter="20">
                    <el-col :span='12'>
                        <imgShow src='../../static/img/1.A Tribute Page.png' 
                                href='../../static/project/1.A Tribute Page.html'
                                projectName='TRIBUTE PAGE' :srcList='srcList'/>
                    </el-col>

                    <el-col :span='12'>
                        <imgShow src='../../static/img/2.A Survey Form.png' 
                                href='../../static/project/2.A Survey Form.html' 
                                projectName='SURVEY FORM' :srcList='srcList'/>
                    </el-col>
                </el-row>


                <el-row gutter="20">
                    <el-col :span='12'>
                        <imgShow src='../../static/img/4.A Technology Document.png' 
                                href='../../static/project/4.A Technology Document.html' 
                                projectName='TECHNOLOGY DOCUMENT' :srcList='srcList'/>
                    </el-col>

                    <el-col :span='12'>
                        <imgShow src='../../static/img/1.Random Quote Machine.png' 
                                href='../../static/project/1.Random Quote Machine.html' 
                                projectName='RANDOM QUOTE MACHINE' :srcList='srcList'/>
                    </el-col>
                </el-row>


                <el-row gutter="20">
                    <el-col :span='12'>
                        <imgShow src='../../static/img/2.Markdown Complier.png' 
                                href='../../static/project/2.Markdown Complier.html' 
                                projectName='MARKDOWN COMPLIER' :srcList='srcList'/>
                    </el-col>

                    <el-col :span='12'>
                        <imgShow src='../../static/img/3.Drum Machine.png' 
                                href='../../static/project/3.Drum Machine.html' 
                                projectName='DRUM MACHINE' :srcList='srcList'/>
                    </el-col>
                </el-row>

                <!-- <el-row gutter="20">
                    <el-col :span='12'>
                        <imgShow src='../../static/img/2.Markdown Complier.png' 
                                href='../../static/project/2.Markdown Complier.html' 
                                projectName='MARKDOWN COMPLIER' :srcList='srcList'/>
                    </el-col>

                    <el-col :span='12'>
                        <imgShow src='../../static/img/3.Drum Machine.png' 
                                href='../../static/project/3.Drum Machine.html' 
                                projectName='DRUM MACHINE' :srcList='srcList'/>
                    </el-col>
                </el-row> -->



                </div>
            <!--------------------------------------------------------------------------------------------->
        

        
    </div>
</template>

<script>
import imgShow from './components/imgShow';

export default {
    components:{
        imgShow,
    },
    data() {
      return {
        url: '',
        srcList: [
          '../../static/img/1.A Tribute Page.png',
          '../../static/img/2.A Survey Form.png',
          '../../static/img/4.A Technology Document.png',
          '../../static/img/1.Random Quote Machine.png',
          '../../static/img/2.Markdown Complier.png',
          '../../static/img/3.Drum Machine.png',
        ]
      }
    }
}
</script>

<style scoped>
    .project-block{
        text-align: left;
    }
    .divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 135px;
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
    .project-content{
        margin-top:5%;
        width:100%;
        font-size:16px;
        height:400px;
    }
    .container{
        padding:10px;
        background:#303841;
    }
    .el-col{
        margin-bottom: 20px;
    }
   
</style>