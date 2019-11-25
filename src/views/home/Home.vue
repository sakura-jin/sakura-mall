<template>
    <div>
        <nav-bar class="home-nav">
            <span slot='center'>Sakura-Mall</span>
        </nav-bar>
        <home-swiper :banners='banners'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title='controlTitle' @tabClick='tabClick'></tab-control>
        <good-list :goods-list='showGoodsList'></good-list>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import FeatureView from '@/views/home/childComps/FeatureView'
import RecommendView from '@/views/home/childComps/RecommendView'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodList from '@/components/content/goods/GoodList'
import {getHomeMultidata,getHomeData} from '@/network/home'
export default {
    name:"Home",
    data(){
        return{
            banners:[],
            recommends:[],
            controlTitle:['流行','新款','精选'],
            goodsList:{
                'pop':{page:1,list:[]},
                'new':{page:1,list:[]},
                'sell':{page:1,list:[]}
            },
            currentType:'pop'
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        FeatureView,
        RecommendView,
        TabControl,
        GoodList
    },
    created(){
        this.getHomeMultidata();
        // 请求商品数据
        this.getHomeProducts('pop');
        this.getHomeProducts('new');
        this.getHomeProducts('sell');

    },
    computed: {
        showGoodsList(){
            return this.goodsList[this.currentType].list;
        }
    },
    methods:{
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType='pop'  
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
            }
        },
        // network
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners=res.data.banner.list;
                this.recommends=res.data.recommend.list;
            })
        },
        getHomeProducts(type){
            getHomeData(type,this.goodsList[type].page).then(res=>{
                const goodsList=res.data.list;
                this.goodsList[type].list.push(...goodsList);
                this.goodsList[type].page+=1;
            })
        }
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