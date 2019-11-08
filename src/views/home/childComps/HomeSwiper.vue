<template>
    <swiper :options='swiperOption'>
        <swiper-slide><img src="../../../assets/images/home/swiper1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/home/swiper2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../../assets/images/home/swiper3.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot='pagination'></div>
    </swiper>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'HomeSwiper',
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
.swiper-slide img{
    width: 100%; 
}
.swiper-pagination-bullet-active{
    background: pink;
}
</style>