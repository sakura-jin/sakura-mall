<template>
    <div id="category">
        <nav-bar class="nav-bar">
            <span slot='center'>分类页</span>
        </nav-bar>
        <div class="content">
            <tab-menu :categories='categories' @selectItem='selectItem'></tab-menu>
            <scroll id="tab-content">
                <tab-content-category :subcategories="showSubcategory"></tab-content-category>
            </scroll>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'
import {getCategory,getSubcategory} from '@/network/category'
import Scroll from '@/components/common/scroll/Scroll'
export default {
    name:"Category",
    data(){
        return{
            categories:[],
            currentIndex:-1,
            categoryData:{}
        }
    },
    components:{
        NavBar,
        TabMenu,
        Scroll,
        TabContentCategory
    },
    created(){
        this.getCategory();
    },
    computed: {
        showSubcategory(){
            if(this.currentIndex==-1){
                return {};
            }else{
                return this.categoryData[this.currentIndex].subcategories;
            }

        }
    },
    methods:{
        getCategory(){
            getCategory().then(res=>{
                // 获取分类数据
                this.categories=res.data.category.list;
                console.log(this.categories);
                // 初始化每个类别的子数据
                for(let i=0;i<this.categories.length;i++){
                    this.categoryData[i]={
                        subcategories:{}
                    }
                }
                // this.getSubcatagories(0);
            })
        },
        selectItem(index){
            // this.getSubcatagories(index);
        },
        // getSubcatagories(index){
        //     this.currentIndex=index;
        //     const mailKey=this.categories[index].maitKey;
        //     getSubcategory(mailKey).then(res=>{
        //         console.log(res);
        //         // this.categoryData[index].subcategories = res.data;
        //         // this.categoryData = {...this.categoryData}
        //     })
            
        // }
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