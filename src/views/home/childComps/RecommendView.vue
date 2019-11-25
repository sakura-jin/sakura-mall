<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key=index>
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:['recommends'],
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
        height: 70px;
        margin-bottom: 10px;
       }
    }
}

    
</style>