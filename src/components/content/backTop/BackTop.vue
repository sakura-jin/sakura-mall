<template>
    <div class='back-top'>
        <i class='iconfont icon-up'></i>
    </div>
</template>

<script>
export default {
    name:"BackTop"
}
</script>
<style lang="scss" scoped>
.back-top{
    position: fixed;
    right: 10px;
    bottom: 58px;
    width: 42px;
    height: 42px;
    line-height: 42px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    box-shadow: 2px 2px 4px #999;
    i{
        font-size: 22px;
        color: pink;
        font-weight: bold;
    }

}
</style>