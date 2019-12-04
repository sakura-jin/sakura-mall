<template>
    <div id="home">
        <nav-bar class="home-nav">
            <span slot='center'>Sakura-Mall</span>
        </nav-bar>
        <tab-control v-show="isTabShow" class="tab-control" :title='controlTitle' @tabClick='tabClick' ref='tabControl1'></tab-control>
        <scroll class="content"  :probe-type='3' :pull-up-load='true' ref='scroll' @scroll='contentScroll' @pullingUp='loadMore'>
            <home-swiper :banners='banners' @swiperLoad='swiperLoad'></home-swiper>
            <recommend-view :recommends='recommends'></recommend-view>
            <feature-view></feature-view>
            <tab-control :title='controlTitle' @tabClick='tabClick' ref='tabControl2'></tab-control>
            <good-list :goods-list='showGoodsList'></good-list>
        </scroll>
        <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
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
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'
import {debounce} from '@/common/utils'
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
            currentType:'pop',
            isShowBackTop:false,
            itemImglistenner:null,
            saveY:0,
            tabOffsetTop:0,
            isTabShow:false
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        FeatureView,
        RecommendView,
        TabControl,
        GoodList,
        Scroll,
        BackTop,
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
    mounted(){
        let refresh=debounce(this.$refs.scroll.refresh,50);
        //保存监听的事件
        this.itemImglistenner=()=>{refresh()}
        this.$bus.$on('itemImgload',this.itemImglistenner);
    },
    activated(){
        // 返回页面原来位置
        this.$refs.scroll.scrollTo(0,this.saveY);
        this.$refs.scroll.refresh();
    },
    deactivated(){
        this.saveY=this.$refs.scroll.getScrollY();
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
            this.$refs.tabControl1.currentIndex=index;
            this.$refs.tabControl2.currentIndex=index;
        },
        backClick(){
           this.$refs.scroll.scrollTo(0,0);
        },
        contentScroll(position){
            this.isShowBackTop=(-position.y)>1000;
            this.isTabShow=(-position.y)>this.tabOffsetTop;
        },
        // 上拉加载
        loadMore(){
            this.getHomeProducts(this.currentType);
        },
        swiperLoad(){
            this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
            console.log(this.tabOffsetTop);
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
                this.$refs.scroll.finishPullUp();
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
#home{
    height: 100vh;
    position: relative;
    .home-nav{
        background: pink;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    };
    .tab-control{
        position: relative;
        z-index: 10;
    }
    .content{
        position: absolute;
        top: 48px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
}
    
</style>