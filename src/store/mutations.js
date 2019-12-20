const mutations={
    addCart(state,payload){
        const oldCart=state.cartList.find(item=>item.iid=payload.iid);
        if(oldCart){
            oldCart.count++
        }else{
            state.cartList.push(payload);
        }
    }
}
export default mutations