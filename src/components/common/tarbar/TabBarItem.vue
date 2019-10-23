<template>
    <div class="tab-bar-item" @click='go'>
        <div :style='activeStyle'><slot name='item-icon'></slot></div>
        <div :style='activeStyle'><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:String,
        inactiveColor:{
            type:String,
            default:'#666'
        }
    },
    methods:{
        go(){
            this.$router.push(this.path).catch(err => {});
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1;
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{color:this.inactiveColor}
        }
    },

}
</script>
<style lang="scss" scoped>
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        .iconfont{
            display: inline-block;
            font-size: 18px;
            margin-bottom: 4px;
        }
        p{
             font-size: 14px;
        }
    }
</style>