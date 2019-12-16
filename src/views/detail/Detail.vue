<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <scroll class="content" ref='scroll' :probe-type=3>
            <detail-swiper :images='topImages'></detail-swiper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shop'></detail-shop-info>
            <detail-goods-info :detailInfo='detailInfo'></detail-goods-info>
            <detail-param-info :paramInfo='paramInfo'></detail-param-info>
            <detail-comment-info :comment-info='commentInfo'></detail-comment-info>
            <detail-recommend-info :recommend-list='recommendList'></detail-recommend-info>
        </scroll>
        <detail-bottom-bar></detail-bottom-bar>
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
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from '@/network/detail'
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
            recommendList:[]
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
        Scroll
    },
    created(){
        this.getDetailData();
        this.getRecommend();
    },
    methods:{
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
                console.log(this.commentInfo);
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
            })
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