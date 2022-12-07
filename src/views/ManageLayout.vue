<template>
    <div class="manage-layout">
     <LeftMenu
      @changeFilter="changeFilter"
      v-if="isShowLeftMenu"
     />
     <div class="extension-btn">
            <img class="icon icon-drop-down" src ="../assets/icon-drop-down.png" @click="toggleShowLeftMenu"/>
        </div>
     <div class="manage-content">
        <TheNavbar />
        <div class="map">
            <TheMapVue 
            ref="theMap"
            />
        </div> 
     </div>
    </div>
</template>
<script>
import TheMapVue from '@/components/TheMap3.vue';
import LeftMenu from '../components/LeftMenu.vue'
import TheNavbar from '../components/TheNavbar.vue'
  export default {
    name: 'Home',
    components: {
      LeftMenu,
      TheNavbar,
      TheMapVue
    },
    data() {
      return {
        isShowLeftMenu: true,
      }
    },
    methods:{
      changeFilter(){
        var me = this;
        me.changeFilter2();
      },
      changeFilter2() {
        this.$refs.theMap.changeMap();
      },
      toggleShowLeftMenu() {
            this.$refs.theMap.changeMap();
            this.isShowLeftMenu = !this.isShowLeftMenu;
            var btnHide = document.getElementsByClassName("extension-btn");
            if (!this.isShowLeftMenu) btnHide[0].style.left = 0;
            else btnHide[0].style.left = '367px';
      },
    }
}
</script>
<style>
.manage-layout{
    width: 100%;
    max-height: 100vh;
    display: flex;
    position: relative;
}
.manage-content{
    width: 100%;
    height: 100vh;

}
.map{
  height: 100%;
  width: 100%;
}
</style>