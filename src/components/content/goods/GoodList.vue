<template>
    <div class="goods">
        <good-list-item v-for='(item,index) in goodsList' :key='index' :goods-item='item'></good-list-item>
    </div>
</template>
<script>
import GoodListItem from './GoodListItem'
export default {
    name:'GoodList',
    props:['goodsList'],
    components:{
        GoodListItem
    }
}
</script>

<style lang="scss">
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>