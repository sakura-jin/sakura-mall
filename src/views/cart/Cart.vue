<template>
    <div id='cart'>
        <nav-bar class="nav-bar"><div slot='center'>购物车({{cartCount}})</div></nav-bar>
        <cart-list :cart-list='cartList' class="cart-list"></cart-list>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'
import {mapGetters} from 'vuex'
export default {
    name:"Cart",
    components:{
        NavBar,
        CartList,
        BottomBar 
    },
    computed: {
        // cartList(){
        //     return this.$store.getters.cartList;
        // }
        ...mapGetters(['cartCount','cartList'])
    },
}
</script>

<style lang="scss" scoped>
#cart{
    height: 100vh;
    .nav-bar{
        background: pink;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
    .cart-list{
        position: absolute;
        top: 48px;
        bottom: 92px;
        width: 100%;
    }
}
</style>
