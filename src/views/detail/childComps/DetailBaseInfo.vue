<template>
    <div class="base-info" v-if='Object.keys(goods).length!==0'>
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span class="discount" v-if='goods.discount'>{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <div class="service-item" v-for="index in goods.services.length-1" :key='index'>
                <img v-if='goods.services[index-1].icon' :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    nama:'DetailBaseInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>  
.base-info{
    margin-top: 14px;
    padding: 0 8px;
    border-bottom: 6px solid #f2f5f8;
    .info-title{
        font-size: 18px;
        color: #222;
    }
    .info-price{
        margin-top: 10px;
        .new-price{
            font-size: 24px;
            color: pink;
        }
        .old-price{
            font-size: 14px;
            margin-left: 6px;
            text-decoration: line-through;
            color: #999;
        }
        .discount{
            font-size: 12px;
            padding: 4px 5px;
            color: #fff;
            background: pink;
            border-radius: 8px;
            margin-left: 6px;
        }
    }
    .info-other{
        margin-top: 14px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #999;
    }
    .info-service{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        img{
            width: 14px;
            height: 14px;
            margin-right: 2px;
            position: relative;
            top: 3px;
        }
        span{
            font-size: 12px;
        }
    }
}
    
</style>