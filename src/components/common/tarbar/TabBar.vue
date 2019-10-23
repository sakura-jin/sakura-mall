<template>
    <div id="TabBar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style lang='scss' scoped>
    #TabBar{
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        height: 49px;
        background: #f6f6f6;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
        box-sizing: border-box;
        padding-top: 4px;
    }
</style>