<template>
   <tab-bar>
       <TabBarItem path='/home' inactiveColor='#999' activeColor='pink'>
           <i slot='item-icon' class="iconfont icon-home"></i>
           <p slot="item-text">首页</p>
       </TabBarItem>
        <TabBarItem  path='/category' inactiveColor='#999' activeColor='pink'>
            <i slot='item-icon' class="iconfont icon-movie"></i>
            <p slot="item-text">分类</p>
       </TabBarItem>
        <TabBarItem  path='/cart' inactiveColor='#999' activeColor='pink'>
            <i slot='item-icon' class="iconfont icon-order"></i>
            <p slot="item-text">购物车</p>
       </TabBarItem>
        <TabBarItem  path='/profile' inactiveColor='#999' activeColor='pink'>
            <i slot='item-icon' class="iconfont icon-user"></i>
            <p slot="item-text">用户</p>
       </TabBarItem>
   </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tarbar/TabBar'
import TabBarItem from '@/components/common/tarbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
    
</style>