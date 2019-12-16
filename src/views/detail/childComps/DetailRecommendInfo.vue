<template>
    <div class="recommend-info">
        <p class="title">推荐商品</p>
        <good-list :goods-list='recommendList'></good-list>
    </div>
</template>


<script>
import GoodList from '@/components/content/goods/GoodList'
export default {
    name:"DetailRecommendInfo",
    props:{
      recommendList:{
          type:Array,
          default(){
              return []
          }
      }  
    },
    components:{
        GoodList
    },
}
</script>

<style lang="scss" scoped>
.recommend-info{
    .title{
        padding:6px;
        color: #999;
        font-size: 16px;
    }
}
    
</style>