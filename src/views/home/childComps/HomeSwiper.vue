<template>
    <swiper :options='swiperOption'>
        <swiper-slide v-for="(banner,index) in banners" :key=index><a :href="banner.link"><img :src='banner.image' :alt="banner.title"></a></swiper-slide>
        <div class="swiper-pagination" slot='pagination'></div>
    </swiper>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'HomeSwiper',
    props:['banners'],
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss">  
.swiper-container{background: pink;font-size: 0}
.swiper-slide img{
    width: 100%; 
}
.swiper-pagination-bullet-active{
    background: pink;
}
</style>