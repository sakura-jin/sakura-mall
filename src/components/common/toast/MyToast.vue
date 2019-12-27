<template>
    <div class="my-toast" v-show='isShow'>
        {{message}}
    </div>
</template>

<script>
export default {
    name:'MyToast',
    data(){
       return{
            isShow:false,
            message:''
       }
    },
     methods:{
        toastShow(message,delay=1500){
            this.isShow=true;
            this.message=message;
            setTimeout(()=>{
                this.isShow=false;
                this.message='';
            },delay)
        }
    },
    

}
</script>

<style lang='scss' scoped>
.my-toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.72);
    z-index: 999;
    color: #fff;
    font-size: 16px;
    padding: 8px 14px;
    border-radius: 4px;
}

</style>