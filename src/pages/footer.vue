<template>
  <div>
    <van-tabbar v-model="tabbaractive">
      <van-tabbar-item to="/">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active1 : icon.normal1"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/Share">
        <span>共享</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active2 : icon.normal2"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/booklist">
        <span>书单</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active3 : icon.normal3"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/My">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active4 : icon.normal4"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
	export default {
		name: "footer",
    data(){
      return{
        tabbaractive: 0,
        icon: {
          normal1: 'static/icon/home1.png',
          active1: 'static/icon/home2.png',
          normal2: 'static/icon/share1.png',
          active2: 'static/icon/share2.png',
          normal3: 'static/icon/booklist1.png',
          active3: 'static/icon/booklist2.png',
          normal4: 'static/icon/my1.png',
          active4: 'static/icon/my2.png',
        }
      }
    },
	}
</script>

<style scoped>

</style>
