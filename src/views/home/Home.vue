<template>
    <div>
        <nav-bar class="home-nav">
            <span slot='center'>Sakura-Mall</span>
        </nav-bar>
        <home-swiper></home-swiper>
        <recommend-view></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title='controlTitle'></tab-control>
        <div style="height:800px">内容</div>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import FeatureView from '@/views/home/childComps/FeatureView'
import RecommendView from '@/views/home/childComps/RecommendView'
import TabControl from '@/components/content/tabControl/TabControl'
export default {
    name:"Home",
    data(){
        return{
            controlTitle:['流行','新款','精选']
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        FeatureView,
        RecommendView,
        TabControl
    }
}
</script>

<style lang="scss" scoped>
.home-nav{
    background: pink;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
};
.tab-control{
    position: sticky;
    top: 48px;

}
    
</style>