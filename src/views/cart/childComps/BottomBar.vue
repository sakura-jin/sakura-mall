<template>
    <div class="bottom-menu">
        <check-button class="select-all" @checkClick='checkClick' :value='isSelectAll'></check-button>
        <span class="all-txt">全选</span>
        <div class="total-price">合计:￥{{totalPrice}}</div>
        <div class="buy-product">去计算{{cartCount}}</div>
    </div>
</template>

<script>
import CheckButton from './CheckButton'
import {mapGetters} from 'vuex'
export default {
    name:"BottomBar",
    components:{
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList']),
        isSelectAll:function(){
            if(this.cartList.length==0)return false;
            return this.cartList.find(item=>item.checked==false)===undefined
        },
        totalPrice(){
            return this.cartList.filter(item=>{
                return item.checked;
            }).reduce((preVal,item)=>{
                return preVal+item.count*item.nowPrice;
            },0).toFixed(2);
        },
        cartCount(){
            return this.cartList.filter(item=>{
                return item.checked;
            }).length;
        }
    },
    methods:{
        checkClick(){
            // 判断是否有未选中的按钮
            let selectAll=this.cartList.find(item=>!item.checked);
            // 如果有未选中的则全部选中
            if(selectAll){
                this.cartList.forEach(item=>{
                    item.checked=true;
                })
            }else{
                this.cartList.forEach(item=>{
                    item.checked=false;
                })
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.bottom-menu{
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    background: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    z-index: 6;
    .select-all{
        float: left;
        margin-right: 4px;
    }
    .all-txt{
        float: left;
    }
    .total-price{
        float: left;
        margin-left: 14px;
        color: #666;
    }
    .buy-product{
        width: 100px;
        height: 44px;
        text-align: center;
        float: right;
        color: #fff;
        background: orangered;
    }
}

</style>