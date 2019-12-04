<template>
    <scroll id="tab-menu">
        <div class="menu-list">
            <div class="menu-list-item" 
                 v-for='(item,index) in categories' 
                 :key='index' 
                 :class="{active:index==currentIndex}"
                 @click='itemClick(index)'>
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
    name:"TabMenu",
    props:{
        categories:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    components:{
        Scroll
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('selectItem',index);
        }
    }
}
</script>

<style lang="scss" scoped>
#tab-menu{
    background: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
    .menu-list-item{
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
    }
    .active{
            font-weight: bold;
            color: pink;
            background: #fff;
            border-left: 3px solid pink;
    }
}
    
</style>