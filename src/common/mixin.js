import {debounce} from './utils'
import BackTop from '@/components/content/backTop/BackTop'

// item加载
export const itemListenerMixin={
    data(){
        return{
            itemImglistenner:null
        }
    },
    mounted(){
        let refresh=debounce(this.$refs.scroll.refresh,50);
        this.itemImglistenner=()=>{refresh()}
        this.$bus.$on('itemImgload',this.itemImglistenner);
    }
}

// 置顶功能
export const backTopMixin={
    data(){
        return{
            isShowBackTop:false
        }
    },
    components:{
        BackTop
    },
    methods: {
        backClick(){
            this.$refs.scroll.scrollTo(0,0);
        }
    },

}
// tabBar隐藏
export const tabBarMixin={
    created() {
        this.$store.commit('setTabShow',false);
    },
    destroyed() {
        this.$store.commit('setTabShow',true);
    },
}