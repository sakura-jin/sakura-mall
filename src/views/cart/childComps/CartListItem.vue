<template>
    <div class="shop-item">
        <div class="item-selector">
            <check-button :value="itemInfo.checked" @checkClick='checkClick'></check-button>
        </div>
        <div class="item-img">
            <img :src="itemInfo.imgUrl" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{itemInfo.title}}</div>
            <div class="item-desc">商品描述：{{itemInfo.desc}}</div>
            <div class="info-bottom">
                <div class="item-price">￥{{itemInfo.nowPrice}}</div>
                <div class="item-count">x{{itemInfo.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
    name:'CartListItem',
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        CheckButton
    },
    methods:{
        checkClick(){
            this.itemInfo.checked=!this.itemInfo.checked;
        }
    }
}
</script>
<style lang="scss" scoped>
.shop-item{
    width: 100%;
    display: flex;
    padding: 4px;
    border-bottom: 1px solid #ccc;
    .item-selector{
        width: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-img{
        padding: 4px;
        img{
            width: 80px;
            height: 100px;
            display: block;
            border-radius: 4px;
        }
    }
    .item-info{
        font-size: 16px;
        padding: 5px 10px;
        overflow: hidden;
        .item-title, .item-desc {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .item-desc{
            font-size: 14px;
            color: #666;
            margin-top: 14px;
        }
        .info-bottom{
            overflow: hidden;
            margin-top: 10px;
            .item-price{
                float: left;
                color: pink;
            }
            .item-count{
                float: right;
            }
        }
    }
}

    
</style>

