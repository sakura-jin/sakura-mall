<template>
    <div id="profile">
        <nav-bar class="nav-bar"><div slot='center'>个人中心</div></nav-bar>
        <div class="login">
            <div class="photo"><img src="../../assets/images/common/photo.jpg" alt=""></div>
            <div class="info">
                <p>登陆/注册</p>
                <span>暂未绑定手机号</span>
            </div>
        </div>
        <section class="account"> 
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠券</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的积分</div>
            </div>
        </section>
        <div class="profile-list">
            <div class="list-item">我的消息</div>
            <div class="list-item">积分商城</div>
            <div class="list-item">会员卡</div>
            <div class="line"></div>
            <div class="list-item">我的购物车</div>
            <div class="list-item">下载购物APP</div>
        </div>
       
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:"Profile",
    components:{
        NavBar
    }
}
</script>

<style lang="scss" scoped>
#profile{
    background: #fff;
    .nav-bar{
        background: pink;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        box-shadow: none;
    }
    .login{
        height: 84px;
        background: pink;
        padding: 0 20px;
        display: flex;
        align-items: center;
        .photo{
            width: 58px;
            height: 58px;
            border-radius: 50%;
            background: #eee;
            overflow: hidden;
            margin-right: 12px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            p{
                font-size: 20px;
                color: #fff;
            }
            span{
                font-size: 12px;
                color: #fff;
                padding: 0 4px;
            }
        }
    }
    .account{
        display: flex;
        border-bottom: 6px solid #eee;
        .account-item{
            flex: 1;
            background: #fff;
            margin-right: 1px;
            text-align: center;
            color: #666;
            font-size: 14px;
            padding: 16px;
            &:last-of-type{
                margin-right: 0;
            }
            .number{
                line-height: 26px;
                .balance{
                    font-size: 24px;
                    font-weight: bold;
                    color: #ff5f3e;
                    position: relative;
                    top: 2px;
                }
            }
            .account-info{
                margin-top: 4px;
            }

        }
    }
    .profile-list{
        padding-left: 20px;
        .list-item{
            height: 40px;
            line-height: 40px;
            color: pink;
            border-bottom: 1px solid #eee;
        }
        .line{
            height: 4px;
            background: #eee;
        }
    }
}
    
</style>