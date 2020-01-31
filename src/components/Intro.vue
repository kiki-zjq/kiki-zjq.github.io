<template>
    <div class="intro-page"></div>
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
    margin-top:-60px;
    width:100%;
    height:80vh;
    border:black 2px solid;
    border-radius:0 0 20px 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3) 1px, transparent 1px), 
                linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px) 
                rgb(54, 54, 69);
    background-size:50px 50px;
}
</style>