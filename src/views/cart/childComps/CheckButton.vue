<template>
    <div class="select" :class="{'active':value}" @click='selectItem'>
        <i class="iconfont icon-check"></i>
    </div>
</template>

<script>
export default {
    name:"CheckButton",
    props:{
        value:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            checked:this.value
        }
    },
    methods:{
        selectItem(){
            this.$emit('checkClick')
        }
    },
    watch:{
        value:function(newVal){
            this.checked=newVal;
        }
    }
}
</script>

<style lang='scss' scoped>
.select{
    i{
        color: #666;
        font-size: 18px;
    }
}
.active{
    i{
        color: pink;
    }
}

</style>