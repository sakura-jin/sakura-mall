<template>
    <div>
        <div class="item">
            <a href="##">
                <img src="" alt="">
                <div class="text"></div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"TabContentCategory",
    props:{
        subcategories:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>