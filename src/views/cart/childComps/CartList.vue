<template>
    <scroll>
        <cart-list-item v-for='(item,index) in cartList' :key='index' :item-info='item'></cart-list-item>
    </scroll>
</template>
<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'
export default {
    name:'CartList',
    props:{
        cartList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Scroll,
        CartListItem   
    }
}
</script>

<style lang='scss' scoped>

</style>