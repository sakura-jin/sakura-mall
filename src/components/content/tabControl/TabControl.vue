<template>
    <div class="tab-control">
        <div class="control-item"
             v-for='(item,index) in title' :key=index
             :class='{active:index==currentIndex}'
             @click='itemClick(index)'>
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        title:{
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
    methods:{
        itemClick(index){
            this.currentIndex=index;
        }
    }
}
</script>

<style lang="scss">

.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    .control-item{
        flex:1;
        span{
            padding: 5px;
        }
    }
    .active{
        color: pink;
        span{
            border-bottom: 3px solid pink;
        }
    }
}
    
</style>