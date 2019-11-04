<template>
    <div>
        <nav-bar class="home-nav">
            <span slot='center'>Sakura-Mall</span>
        </nav-bar>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwiper
    }
}
</script>

<style lang="scss" scoped>
.home-nav{
    background: pink;
    color: #fff;
    font-weight: bold;
    font-size: 20px
};
    
</style>