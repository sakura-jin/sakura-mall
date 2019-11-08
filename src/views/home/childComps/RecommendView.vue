<template>
    <div class="recommend">
        <div class="recommend-item">
            <img src="../../../assets/images/home/recommend1.jpg" alt="">
            <p>母婴</p>
        </div>
        <div class="recommend-item">
            <img src="../../../assets/images/home/recommend2.jpg" alt="">
            <p>包包</p>
        </div>
        <div class="recommend-item">
            <img src="../../../assets/images/home/recommend3.jpg" alt="">
            <p>家居</p>
        </div>
        <div class="recommend-item">
            <img src="../../../assets/images/home/recommend4.jpg" alt="">
            <p>配饰</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    data(){
       return {
       }
    }
}
</script>
<style lang="scss">
.recommend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    .recommend-item{
        flex: 1;
       img{
           width: 70px;
       }
    }
}

    
</style>