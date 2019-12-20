import Vue from 'vue'
import VueX from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(VueX);
const state={
    cartList:[]
}

let store=new VueX.Store({
    state,
    actions,
    getters,
    mutations
})

export default store;
