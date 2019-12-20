<template>
    <scroll>
        <cart-list-item></cart-list-item>
    </scroll>
</template>
<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'
export default {
    name:'CartList',
    components:{
        Scroll,
        CartListItem   
    }
}
</script>

<style lang='scss' scoped>

</style>