<template>
    <div class="good-item" @click='itemClick'>
        <img :src="showImage" @load="imgLoad">
        <div class="good-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">
               <i class="iconfont icon-star"></i>
               {{goodsItem.cfav}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodListItem',
    props:['goodsItem'],
    data(){
        return{

        }
    },
    computed: {
        showImage(){
            return  this.goodsItem.image || this.goodsItem.show.img;
        }
    },
    methods:{
        imgLoad(){
           this.$bus.$emit('itemImgload');
        },
        itemClick(){
            this.$router.push('./detail/'+this.goodsItem.iid);
        }
    },
}
</script>
<style lang="scss">
.good-item{
    padding-bottom:40px;
    position: relative;
    width: 48%;
    img{
        width: 100%;
        border-radius: 5px;
    }
    .good-info{
        font-size: 12px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 4px;
        overflow: hidden;
        text-align: center;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 3px;
        }
        .price{
            margin-right: 4px;
        }
    }
}
    
</style>