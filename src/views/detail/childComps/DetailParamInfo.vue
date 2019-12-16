<template>
    <div class="param-info">
        <p class="title">参数信息</p>
        <table class="info-size" v-for='(table,index) in paramInfo.size' :key='index'> 
            <tr v-for='(tr,index) in table' :key='index'>
                <td v-for="(td,index) in tr" :key='index' class="param-key">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in paramInfo.infos" :key='index'>
                <td class="param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if='paramInfo.images'>
            <img :src="paramInfo.images" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailParamInfo',
    props:{
        paramInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.param-info{
    padding: 20px 14px;
    font-size: 14px;
    border-bottom: 6px solid #f2f5f8;
    background: #fff;
    .title{
        font-size: 16px;
        color: #666;
        margin-bottom:4px; 
    }
    table{
        width: 100%;
        tr{
            height: 42px;
            border-bottom: 1px solid #eee;
        }
        .param-key{
            width: 98px;
            color: #999;
        }
        .param-value{
            color: #eb4868;
        }
    }
    .info-size{
        border-bottom: 4px solid #eee;
    }
    .info-img{
        img{
            width: 100%;
        }
    }
}
    
</style>