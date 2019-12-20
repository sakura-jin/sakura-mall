<template>
    <div id='cart'>
        <nav-bar class="nav-bar"><div slot='center'>购物车</div></nav-bar>
        <cart-list></cart-list>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'
export default {
    name:"Cart",
    components:{
        NavBar,
        CartList,
        BottomBar 
    }
}
</script>

<style lang="scss" scoped>
#cart{
    .nav-bar{
        background: pink;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
}
</style>
