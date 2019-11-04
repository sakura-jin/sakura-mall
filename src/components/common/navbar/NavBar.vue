<template>
    <div class='nav-bar'>
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name='center'></slot></div>
        <div class="right"><slot name='right'></slot></div>
    </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>

<style lang="scss">
.nav-bar{
    display: flex;
    height: 48px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    .left{
        width: 60px;
    }
    .center{
        flex: 1;
        line-height: 48px;
        text-align: center;
    }
    .right{
        width: 60px;
    }
}

    
</style>