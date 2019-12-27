const getters={
    tabBarShow(state){
        return state.tabBarShow;
    },
    cartList(state){
        return state.cartList;
    },
    cartCount(state){
        return state.cartList.length;
    }
}
export default getters;