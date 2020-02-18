<template>
    <div class="block">
        <h2>Experience 个人经历</h2>
        <div class="divider"></div>
        <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>

         <el-timeline :reverse="reverse">
            <el-timeline-item
            v-for="(activity, index) in this.activities"
            :key="index"
            :timestamp="activity.timestamp"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            placement="top">
            <el-card>
                <h3 class='activity-title'>{{activity.title}}</h3>
                <div v-for='(content,index) in activity.content' :key='index'>
                    <p class='activity-content'>
                        {{content}}
                    </p><br />
                </div>
            </el-card>
            </el-timeline-item>
        </el-timeline>

</div>
</template>

<script>
  export default {
    data() {
      return {
        reverse: false,
        activities:this.activities,
      };
    },
    mounted(){
        this.$http.get('../../static/data/experience.json')
        .then((res)=>{
            console.log(res);
            this.reverse = false;
            this.activities=res.data.contents;
        });
    }
  };
</script>

<style scoped>
.block{
    text-align: left;
}
.radio{
    margin-top:5%;
    margin-bottom: 5%;
    font-family: Microsoft JhengHei;
}
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 230px;
        margin-top: -18px;
    }
.block .activity-content{
    font-size:18px;
    line-height:24px;
    margin-bottom:-20px;
}
</style>