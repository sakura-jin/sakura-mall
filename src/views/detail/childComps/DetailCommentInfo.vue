<template>
    <div class="comment-info" v-if='Object.keys(commentInfo).length!==0'>
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多</div>
        </div>
        <div class="info-user">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <div class="info-detail">
            <p>{{commentInfo.content}}</p>
            <div class="info-other">
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-imgs">
                <img :src="item" v-for='(item,index) in commentInfo.images' :key='index'>
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    filters:{
        showDate(value){
            const date=new Date(value*1000);
            return formatDate(date,'yyyy-MM-dd hh:mm')
        }
    }
}
</script>

<style lang="scss" scoped>
.comment-info{
    padding: 4px 12px;
    border-bottom: 6px solid #f2f5f8;
    .info-header{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        .header-title{
            float: left;
            font-size: 16px;
            color: #999;
        }
        .header-more{
            font-size: 14px;
            float: right;
        }
    }
    .info-user{
        padding: 10px 0 4px;
        line-height: 42px;
        img{
            width: 42px;
            height: 42px;
            border-radius: 50%;
            vertical-align: middle;
        }
        span{
            margin-left: 12px;
            font-size: 14px;
            color: #333;
        }
    }
    .info-detail{
        padding: 0 4px 14px;
        .info-other{
            font-size: 12px;
            color: #999;
            margin-top: 8px;
            .date{
                margin-right: 8px;
            }
        }
        p{
            color: #777;
        }
        .info-imgs{
            margin-top: 8px;
            img{
                width: 70px;
                height: 70px;
                margin-right: 4px;
            }
        }
    }
}
    
</style>