<template>
    <div id="category">
        <nav-bar class="nav-bar">
            <span slot='center'>分类页</span>
        </nav-bar>
        <div class="content">
            <tab-menu :categories='categories'></tab-menu>
            <scroll id="tab-content">

            </scroll>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu'
import {getCategory} from '@/network/category'
import Scroll from '@/components/common/scroll/Scroll'
export default {
    name:"Category",
    data(){
        return{
            categories:[],
            currentIndex:-1,
            catagoryDetail:{}
        }
    },
    components:{
        NavBar,
        TabMenu,
        Scroll
    },
    created(){
        this.getCategory();
    },
    methods:{
        getCategory(){
            getCategory().then(res=>{
                this.categories=res.data.category.list;
            })
        },
        getSubcatagories(index){
            this.currentIndex=index;
            const mailKey=this.categories[index].maitKey;
        }
    }
}
</script>

<style lang="scss" scoped>
#category{
    height: 100vh;
    .nav-bar{
        background: pink;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
    .content{
        position: absolute;
        left: 0;
        right: 0;
        top: 48px;
        bottom: 49px;
        display: flex;
        #tab-content{
            flex:1;
            height: 100%;
        }
    }
}
    
</style>