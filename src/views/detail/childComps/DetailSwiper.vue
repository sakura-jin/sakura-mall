<template>
    <swiper :options='swiperOption' class="detail-swiper" v-if='images.length'>
        <swiper-slide v-for="(item,index) in images" :key=index><img :src='item' @load="imageLoad"></swiper-slide>
        <div class="swiper-pagination" slot='pagination'></div>
    </swiper>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:"DetailSwiper",
    props:{
        images:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
             swiperOption:{
                loop:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            },
            isLoad:false
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    methods:{
        imageLoad(){
           if(!this.isLoad){
               this.$emit('imageLoad');
                this.isLoad=true;
           }
        }
    }
}
</script>

<style lang="scss">
.detail-swiper{
    height: 300px;
    overflow: hidden;
    .swiper-container{
        background: pink;
        font-size: 0; 
        touch-action: none;
    }
    .swiper-slide img{
        width: 100%; 
    }
    .swiper-pagination-bullet-active{
        background: pink;
}
}
    
</style>