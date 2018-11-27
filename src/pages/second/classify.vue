<template>
  <div class="main">
        <van-row span="24" class="content" >
          <van-col class="beijing" v-for="(item,index) in items" :key="index" >
            <img :src="item.img" alt="">
            <div class="title">{{item.title}}</div>
          </van-col>
        </van-row>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        active: 0,
        items: [
          { img: "static/image/Diary.png", title: "随笔" },
          { img: "static/image/Sporepedia.png", title: "百科" },
          { img: "static/image/Poem.png", title: "诗歌" },
          { img: "static/image/Story.png", title: "故事" }
        ]
      };
    }
  };
</script>

<style scoped>
  .content {
    margin-top: 4px;
    text-align: center;
  }
  .beijing {
    height: 138px;
    width: 100%;
  }
  .beijing img {
    width: 100%;
    height: 128px;
    text-align: center;
    justify-content:center;
  }
  .title {
    font-size: 25px;
    color: rgb(254, 255, 255);
    transform: translateY(-80px);
  }
</style>
