import { resolve } from "_any-promise@1.3.0@any-promise"

const actions={
    addToCart(context,payload){
        return new Promise(resolve=>{
            const isOld=context.state.cartList.find(item=>item.iid===payload.iid);
            if(isOld){
                context.commit('addCount',isOld);
                resolve('商品数量加1');
            }else{
                context.commit('pushCart',payload);
                resolve('添加商品成功');
            }
        })
    }
}
export default actions;