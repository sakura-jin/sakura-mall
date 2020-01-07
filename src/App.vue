<template>
  <div id="app">
     <keep-alive exclude='Detail'> 
       <transition name='fade'>
         <router-view></router-view>
       </transition>
     </keep-alive>
   <main-tab-bar v-if='$store.getters.tabBarShow'/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components:{
    MainTabBar
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
