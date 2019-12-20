<template>
    <nav-bar class="detail-nav">
        <div slot="left" class="back" @click='backClick'>
            <i class="iconfont icon-back"></i>
        </div>
        <div slot="center" class="title">
            <div class="item-title" 
                v-for="(item,index) in title" 
                :class="{active:currentIndex==index}"
                @click='titleClick(index)'
                :key='index'>
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:"DetailNavBar",
    props:{
        currentIndex:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
            title:['商品','参数','评论','推荐']
        }
    },
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back();
        },
        titleClick(index){
            this.$emit('titleClick',index);
        }
    }
}
</script>

<style lang="scss" scoped>

.detail-nav{
    background: #fff;
    .back{
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: bold;
    }

.title{
    display: flex;
    .item-title{
        flex: 1;
        font-size: 12px;
    }
    .active{
        color: pink;
    }
}
}

    
</style>