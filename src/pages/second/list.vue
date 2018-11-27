<template>
  <div class="main">
    <van-row type="flex" justify="center" class="hot">
      <van-col offset="1" span="6">共享排行榜</van-col>
      <van-col offset="12" span="5" class="more">查看更多&nbsp;<img src="static/icon/more.png"></van-col>
    </van-row>

        <van-row type="flex" justify="center" id="donate-book">
          <van-col span="8" class="border" v-for="(item,index) in items" :key="index">
            <div class="icon">
              <img src="static/icon/photo.png" class="Picture-frame" alt="">
              <img :src="item.img" class="Head-Portraits" alt="">
              <div class="circle" >{{index+1}}</div>
            </div>
            <div class="name">{{item.name}}</div>
            <div class="school">[{{item.school}}]</div>
            <div class="total">共捐{{item.total}}本</div>
          </van-col>
        </van-row>
    <div class="fengexian"></div>
        <!-- 藏书借阅榜 -->
    <van-row type="flex" justify="center" class="hot">
      <van-col offset="1" span="6">藏书借阅榜</van-col>
      <van-col offset="12" span="5" class="more">查看更多&nbsp;<img src="static/icon/more.png"></van-col>
    </van-row>
        <van-row type="flex" justify="center" class="cs">
          <van-col span="8" v-for="(item,index) in library" :key="index" class="bookList">
            <div >
              <img :src="item.img" class="csimg" alt="">
              <p >《<span class="bookName">{{item.bookName}}</span>》</p>
            </div>
          </van-col>
        </van-row>
        <div class="fengexian"></div>
    <van-row type="flex" justify="center" class="hot">
      <van-col offset="1" span="6">阅读排行榜</van-col>
      <van-col offset="12" span="5" class="more">查看更多&nbsp;<img src="static/icon/more.png"></van-col>
    </van-row>
        <van-row type="flex" justify="center" class="read" >
          <van-col span="8" class="reads">
            <img :src="read[0].img" class="reading" alt="">
          </van-col>
          <van-col span="16">
            <van-col  id="ydContent" v-for="(item,index) in read" :key="index" span="24">
              <div class="ydcircle">{{index+1}}</div>
              <span class="bookTitle">{{item.bookTitle}}</span>
              <span class="autor">{{item.autor}}</span>
            </van-col>
          </van-col>
        </van-row>
        <div class="fengexian"></div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        active: 0,
        items: [
          {
            img: "static/image/anying.png",
            name: "简泽",
            school: "华东师范大学",
            total: "131"
          },
          {
            img: "static/image/anying.png",
            name: "安煜",
            school: "星海实验高中",
            total: "98"
          },
          {
            img: "static/image/anying.png",
            name: "伊青寻",
            school: "西交利物浦大学",
            total: "85"
          }
        ],
        library: [
          { img: "static/image/renshengdaoludu.png", bookName: "人生道路诸阶段" },
          { img: "static/image/yangzhiqiu.png", bookName: "羊脂球" },
          { img: "static/image/wangdeerxiju.png", bookName: "王德尔喜剧" }
        ],
        read: [
          { img: "static/image/jianai.png", bookTitle: "简 · 爱", autor: "夏洛特" },
          { img: "", bookTitle: "骆驼祥子", autor: "老舍" },
          { img: "", bookTitle: "泰戈尔飞鸟集", autor: "泰戈尔" }
        ]
      };
    }
  };
</script>

<style scoped>
  .more img {
    width: 0.6em;
  }
  /*<!--捐书排行榜-->*/
  #donate-book {
    height: 210px;
  }
  .top {
    font-size: 17px;
    color: rgb(52, 52, 52);
  }
  .more {
    font-size: 13px;
    color: rgb(152, 152, 152);
  }
  .border {
    text-align: center;
    position: relative;
  }
  #donate-book .van-col:nth-child(2),
  #donate-book .van-col:nth-child(3) {
    margin-top: 30px;
  }
  #donate-book .van-col:nth-child(1) {
    offset: 4;
  }

  .icon {
    position: relative;
  }
  .Picture-frame {
    width: 66px;
    height: 75px;
    position: absolute;
  }
  .Head-Portraits {
    width: 66px;
    height: 75px;
  }
  .circle {
    width: 16px;
    height: 16px;
    font-size: 12px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    background-color: #bbbbbb;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-8px);
  }
  #donate-book .van-col:nth-child(1) {
    position: relative;
    left: 33.33%;
  }
  #donate-book .van-col:nth-child(2) {
    position: relative;
    left: -33.33%;
  }
  #donate-book .van-col:nth-child(1) .circle {
    background-color: #eba100;
  }
  #donate-book .van-col:nth-child(3) .circle {
    background-color: #8e7967;
  }
  .name {
    font-size: 14px;
    color: rgb(52, 52, 52);
    margin-top: 15px;
  }
  .school {
    font-size: 11px;
    color: rgb(152, 152, 152);
    margin-top: 9px;
  }
  .total {
    font-size: 12px;
    color: rgb(101, 101, 101);
    margin-top: 9px;
  }
  /* 分割线 */
  .fengexian {
    width: 100%;
    height: 10px;
    background-color: #f2f2f2;
  }
  /*藏书借阅榜*/
  .cs {
    text-align: center;
    padding: 0 15px;
  }
  .bookList span{
    display: inline-block;
    transform: translateY(4px);
    max-width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bookList:nth-child(2) {
    margin: 0 15px;
  }
  .cs img {
    text-align: center;
    width: 105px;
    height: 150px;
  }
  .bookName {
    font-size: 14px;
    margin:  0;
  }
  .hot {
    line-height: 60px;
  }

  /* 阅读排行榜 */
  .read {
    text-align: left;
    margin-left: 15px;
    margin-bottom: 71.5px;
  }
  .reading {
     width: 97px;
     height: 138px;
     text-align: left;
   }
  .ydContent{
    width: 100%;
  }
  .ydcircle {
    width: 16px;
    height: 16px;
    font-size: 12px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    text-align: center;
    display: inline-block;
    margin: 15px 5px;
  }
  .bookTitle {
    font-size: 14px;
    color: rgb(52, 52, 52);
    margin: 32.5px 15px;
  }
  .autor {
    font-size: 11px;
    color: rgb(101, 101, 101);
  }
  #ydContent:nth-child(1) .ydcircle {
    background-color: #eba100;
  }
  #ydContent:nth-child(2) .ydcircle {
    background-color: #bbbbbb;
  }
  #ydContent:nth-child(3) .ydcircle {
    background-color: #8e7967;
  }
</style>
