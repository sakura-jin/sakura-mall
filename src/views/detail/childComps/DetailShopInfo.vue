<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo">
            <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="middle-item middle-left">
                <div class="info-sells">
                    <div class="sells-count">{{shop.sells|countFilter}}</div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">{{shop.goodsCount}}</div>
                    <div class="goods-text">全部宝贝</div>    
                </div>
            </div>
            <div class="middle-item middle-right">
                <table> 
                    <tr v-for="(item,index) in shop.score" :key='index'> 
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="shop-bottom">
            <div class="enter">进店逛逛</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object,
            dafault(){
                return{}
            }
        }
    },
    filters:{
        countFilter:function(value){
            if(value<10000){
                return value;
            }else{
                return (value/10000).toFixed(1)+'万';
            }
        }
    }
}
</script>
<style lang="scss">   
.shop-info{
    padding: 24px 8px;
    border-bottom: 5px solid #f2f5f8;
    .shop-top{
        display: flex;
        align-items: center;
        img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 1px solid #eee;
        }
        .title{
            margin-left: 10px;
        }
    }
    .shop-middle{
        margin-top: 14px;
        display: flex;
        align-items: center;
        .middle-item{
            flex: 1;
        }
        .middle-left{
            display: flex;
            justify-content: space-evenly;
            border-right: 1px solid #999;
            text-align: center;
            .sells-count,.goods-count{
                font-size: 18px;
            }
            .sells-text,.goods-text{
                font-size: 12px;
                margin-top: 10px;
            }
        }
        .middle-right{
            font-size: 14px;
            color: #333;
            table{
                width: 120px;
                margin-left: 30px;
                td{
                    padding: 4px 0;
                }
                .score{
                    color: #5ea732;
                }
                .score-better{
                    color: #f13e3a;
                }
                .better{
                    span{
                        color: #fff;
                        background: #5ea732;
                    }
                }
                .better-more{
                    span{
                        background: #f13e3a;
                    }
                }
               
            }
        }
    }
    .shop-bottom{
        text-align: center;
        margin-top: 10px;
        .enter{
            display: inline-block;
            font-size: 14px;
            background:#f2f5f8;
            width: 150px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 10px;
            color: #999;
        }
    }
}
    
</style>
