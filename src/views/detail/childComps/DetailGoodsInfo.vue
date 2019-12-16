<template>
    <div class="goods-info" v-if='Object.keys(detailInfo)!==0'>
        <div class="info-desc">
            <i class="start"></i>
            <div class="desc">{{detailInfo.desc}}</div>
            <i class="end"></i>
        </div>
        <div v-if='Array.isArray(detailInfo.detailImage)==true'>
            <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
            <div class="info-list">
               <img v-for='(item,index) in detailInfo.detailImage[0].list' :src="item" :key='index'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailGoodsInfo",
    props:{
        detailInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-info{
    padding: 20px 0;
    border-bottom: 6px solid #f2f5f8;
    .info-desc{
        padding: 0 14px;
        .start{
            width: 90px;
            height: 1px;
            background: #a3a3a5;
            position: relative;
            float: left;
            &::before{
                content: '';
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #333;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
        .end{
            width: 90px;
            height: 1px;
            background: #a3a3a5;
            position: relative;
            float: right;
            &::before{
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #333;
                
            }
        }
        .desc{
            padding: 14px 0;
            font-size: 14px;
            color: #666;
        }
    }
    .info-key{
        margin: 10px 0 10px 14px;
        font-size: 16px;
    }
    .info-list{
        img{
            width: 100%;
        }
    }
}
    
</style>