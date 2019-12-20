<template>
    <div id="detail">
        <detail-nav-bar @titleClick='titleClick' :currentIndex='currentIndex'></detail-nav-bar>
        <scroll class="content" ref='scroll' :probe-type=3 @scroll='contentScroll'>
            <detail-swiper :images='topImages' ref='goods' @imageLoad='imageLoad'></detail-swiper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shop'></detail-shop-info>
            <detail-goods-info :detailInfo='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
            <detail-param-info :paramInfo='paramInfo' ref='params'></detail-param-info>
            <detail-comment-info :comment-info='commentInfo' ref='comment'></detail-comment-info>
            <detail-recommend-info :recommend-list='recommendList' ref='recommend'></detail-recommend-info>
        </scroll>
         <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
        <detail-bottom-bar @addCart='addCart'></detail-bottom-bar>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from '@/network/detail'
import {debounce} from '@/common/utils'
import {itemListenerMixin,backTopMixin} from '@/common/mixin'
export default {
    name:"Detail",
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommendList:[],
            // itemImglistenner:null
            // isShowBackTop:false
             themeTops:[],
             currentIndex:0
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommendInfo,
        DetailBottomBar,
        // BackTop,
        Scroll
    },
    created(){
        this.getDetailData();
        this.getRecommend();
    },
    mixins:[itemListenerMixin,backTopMixin],
    mounted(){
            // let refresh=debounce(this.$refs.scroll.refresh,50);
            // this.itemImglistenner=()=>{refresh()}
            // this.$bus.$on('itemImgload',this.itemImglistenner);
    },
    destroyed(){
        this.$bus.$off('itemImgLoad',this.itemImglistenner);
    },
    methods:{
        titleClick(index){
            this.currentIndex=index;
            this.$refs.scroll.scrollTo(0,-this.themeTops[index]);
        },
        imageLoad(){
            this.$refs.scroll.refresh();
            this.getOffsetTop();
        },
        getDetailData(){
          this.iid=this.$route.params.iid;
          getDetail(this.iid).then((res)=>{
            console.log(res);
            // 获取详情数据
            const data=res.result;
            // 获取轮播信息
            this.topImages=data.itemInfo.topImages;
            // 获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
            // 获取店铺信息
            this.shop=new Shop(data.shopInfo);
            // 获取商品信息
            this.detailInfo=data.detailInfo;
            // 参数信息
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
            // 获取评论信息
            if(data.rate.list){
                this.commentInfo=data.rate.list[0];
            }
         })
        },
        getRecommend(){
            // 获取推荐信息
            getRecommend().then((res,error)=>{
                if(error){
                    return
                }else{
                    this.recommendList=res.data.list;
                }
                this.getOffsetTop();

            })
        },
        contentScroll(position){
            this.isShowBackTop=(-position.y)>1000;
            this.listenScrollTheme(-position.y);
        },
        listenScrollTheme(position){
            let length=this.themeTops.length;
            for(let i=0;i<length;i++){
                let iPos=this.themeTops[i];
                if(position>=iPos&&position<this.themeTops[i+1]){
                    this.currentIndex=i;
                    break;
                }
            }
        },
        getOffsetTop(){
            this.themeTops=[];
            this.themeTops.push(this.$refs.goods.$el.offsetTop-48);
            this.themeTops.push(this.$refs.params.$el.offsetTop-48);
            this.themeTops.push(this.$refs.comment.$el.offsetTop-48);
            this.themeTops.push(this.$refs.recommend.$el.offsetTop-48);
            this.themeTops.push(Number.MAX_VALUE);
            // console.log(this.themeTops);
        },
        // backClick(){
        //     this.$refs.scroll.scrollTo(0,0);
        // }
        addCart(){
            const cart={};
            cart.iid=this.iid;
            cart.imgUrl=this.topImages[0];
            cart.title = this.goods.title
            cart.desc = this.goods.desc;
            cart.nowPrice = this.goods.nowPrice;
            cart.count=1;
            // 添加到store中
            this.$store.commit('addCart',cart);
        }
    }
}
</script>
<style lang="scss" scoped>
#detail{
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fff;
    .content{
      height: calc(100% - 48px - 58px);
    }
}
    
</style>