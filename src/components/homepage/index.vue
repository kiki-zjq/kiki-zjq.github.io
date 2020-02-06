<template>
    <div class="homepage-block">
        <h1>About Me</h1>

        <el-progress type="circle" :percentage="0">JS</el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success">JS</el-progress>
        <el-progress type="circle" :percentage="70" status="warning"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>