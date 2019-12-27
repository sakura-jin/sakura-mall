import MyToast from './MyToast';

const myToast={}
// 封装一个toast插件
myToast.install=function(Vue){
    // 创建组件构造器
    const totastConstructor=Vue.extend(MyToast);
    // 根据组件构造器 创建一个组件对象
    const toast=new totastConstructor();
    // 将组件对象挂载到一个元素上
    toast.$mount(document.createElement('div'));
    // toast.$el对应的就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$myToast=toast;
}


export default myToast;