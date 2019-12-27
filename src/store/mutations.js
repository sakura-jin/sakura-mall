// import {Toast} from 'vant'
const mutations={
    // addCart(state,payload){
    //     const oldCart=state.cartList.find(item=>item.iid===payload.iid);
    //     if(oldCart){
    //         oldCart.count++
    //     }else{
    //         state.cartList.push(payload);
    //         console.log(state.cartList);
    //         Toast({
    //             type:'success',
    //             message:'加入购物车成功',
    //             forbidClick:true,
    //             duration:1200
    //         })
    //     }
    // },
    addCount(state,payload){
        payload.count+=1;
    },
    pushCart(state,payload){
        state.cartList.push(payload);
    },
    setTabShow(state,bol){
        state.tabBarShow=bol;
    }
}
export default mutations;