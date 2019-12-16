<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="iconfont icon-user"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="iconfont icon-shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="iconfont icon-star"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailBottomBar"
}
</script>

<style lang="scss" scoped>
.bottom-bar{
    height: 58px;
    position: fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    text-align: center;
    .bar-item{
        flex: 1;
        display: flex;
        &>div{
            flex: 1;
            .iconfont{
                display: block;
                font-size: 20px;
                margin: 10px auto 2px;
            }
            .text{
                font-size: 12px;
                color: #999;
            }
        }
    }
    .bar-right{
        font-size: 16px;
        line-height: 58px;
        .cart{
            background: #ffe817;
        }
        .buy{
            background: #f69;
            color: #fff;
        }
    }
}
    
</style>