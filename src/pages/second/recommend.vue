<template>
  <div class="main">
        <van-swipe :autoplay="5000" :show-indicators="false" class="nav-lunbo">
          <van-swipe-item v-for="(item,index) in images" :key="index"><img :src="item" class="lunbo"></van-swipe-item>
        </van-swipe>
        <van-row type="flex" justify="center" class="hot"  id="recommend">
          <van-col span="6">推荐作者</van-col>
          <van-col offset="16" span="2"><img src="static/icon/more.png"></van-col>
        </van-row>
        <van-swipe :loop="false" :width="131" :show-indicators="false"  >
          <van-swipe-item v-for="(item,index) in items" :key="index" >
            <div class="writer">
              <div class="photo"><img :src="item.img" /></div>
              <p>{{item.name}}</p>
              <p>{{item.writer}}</p>
              <p>{{item.works}}</p>
              <van-button round size="small">详情</van-button>
            </div>
          </van-swipe-item>
        </van-swipe>
        <van-row>
          <van-col span="24" class="split"></van-col>
        </van-row>
        <van-row type="flex" justify="center" class="hot">
          <van-col span="6">热门书籍</van-col>
          <van-col offset="16" span="2"><img src="static/icon/more.png"></van-col>
        </van-row>
        <van-row class="hot-book">
          <van-col span="10" class="hot-book-left">
            <img src="static/image/kesulushenhua.png" class="small-book">
            <div class="left-p">
              <p class="hot-book-name">《朱自清散文》</p>
              <p class="hot-book-writer">朱自清</p>
              <p class="hot-book-read">6656人正在阅读</p>
            </div>
          </van-col>
          <van-col span="14">
            <van-col class="hot-book-on" span="24">
              <van-col span="15" class="on-p">
                <p class="hot-book-name">《朱自清散文》</p>
                <p class="hot-book-writer">朱自清</p>
                <p class="hot-book-read">6656人正在阅读</p>
              </van-col>
              <van-col span="9">
                <img src="static/image/outli.png" class="on-small-book">
              </van-col>
            </van-col>
            <van-col class="hot-book-down" span="24">
              <van-col span="9">
                <img src="static/image/antushengtonghua.png" class="down-small-book">
              </van-col>
              <van-col span="15" class="down-p">
                <p class="hot-book-name">《朱自清散文》</p>
                <p class="hot-book-writer">朱自清</p>
                <p class="hot-book-read">6656人正在阅读</p>
              </van-col>
            </van-col>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24" class="split"></van-col>
        </van-row>
        <van-row class="hot">
          <van-col span="6">新书推荐</van-col>
          <van-col offset="16" span="2"><img src="static/icon/more.png"></van-col>
        </van-row>
        <van-list v-model="loading" :finished="finished" @load="onload">
          <van-cell v-for="(items,index) in list" :key="index">
            <div class="recommend">
              <van-row  class="new-book">
                <van-col span="10">
                  <img :src="items.img" />
                </van-col>
                <van-col span="14">
                  <p>{{items.name}}</p>
                  <p>{{items.writer}}</p>
                  <p>{{items.intro}}</p>
                </van-col>
              </van-row>

            </div>
          </van-cell>
        </van-list>
  </div>

</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        items:[
          {id:1,img:'static/image/xumeng.png',name:'作者',writer:'法国作家',works:'作品asdasdas das das d'},
          {id:2,img:'static/image/xuzhimo.png',name:'作者',writer:'法国作家',works:'作品asdasd asd '},
          {id:3,img:'static/image/yuguo.png',name:'作者',writer:'法国作家',works:'作品asd asd awsd'},
          {id:4,img:'static/image/xumeng.png',name:'作者',writer:'法国作家',works:'作品asdas da'},
          {id:4,img:'static/image/xuzhimo.png',name:'作者',writer:'法国作家',works:'作品asdas da'},
        ],
        images:['static/image/tuyi.png','static/image/youtusan.png','static/image/zuotuer.png'],
        list:[
          {id:1,img:'static/image/zhuiyisishuinianhua.png',name:'《简爱》',writer:'作者:夏洛特',intro:'简介:这本书不是让你简单的舍弃物品,而是让你从新认识生活的本质.丛胜火空间极简,感情极简和人际关系极简...'},
          {id:1,img:'static/image/zhexuede gushi.png',name:'《简爱》',writer:'作者:夏洛特',intro:'简介:这本书不是让你简单的舍弃物品,而是让你从新认识生活的本质.丛胜火空间极简,感情极简和人际关系极简...'},
          {id:1,img:'static/image/yangzhiqiu.png',name:'《简爱》',writer:'作者:夏洛特',intro:'简介:这本书不是让你简单的舍弃物品,而是让你从新认识生活的本质.丛胜火空间极简,感情极简和人际关系极简...'},
        ],
        loading:false,
        finished:false
      };
    },
    methods:{
      onload(){
      }
    }
  }
</script>

<style scoped >
  .hot img {
    width: 0.6em;
  }
  .nav-lunbo{
    padding: 10px 0;
    text-align: center;
  }
  .lunbo {
    width:281px;
    height: 168px;
  }
  .van-row{
    text-align: center;
    /*height: 60px;*/
    font-size: 17px;
    color: #343434;
  }
  .split{
    background: #f2f2f2;
    height: 10px;
  }
  #recommend{
    border-top: 1px solid #f2f2f2;
  }
  .writer {
    padding-top: 20px;
    padding-bottom: 10px;
    width: 116px;
    height: 187px;
    margin-top: 5px;
    margin-left: 15px;
    margin-bottom: 5px;
    text-align: center;
    box-shadow: 0 0 10px #ccc;
  }
  .photo {
    width: 57px;
    height: 57px;

    border-radius: 29px;
    overflow: hidden;
    margin: 0 auto;
  }
  .writer p {

    color: #343434;
    font-size: 13px;
  }
  .writer p:nth-of-type(2){
    color: #989898;
    font-size: 11px;
  }
  .writer p:nth-of-type(3){
    color: #656565;
    font-size: 11px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .writer img{
    width: 100%;
  }
  .van-button {
    background-color: #0c876d ;
    text-align: center;
    color: #fff;
  }
  .hot{
    line-height: 60px;
  }
  .hot-book{
    height: 257px;
    background: #fff;

  }
  .hot-book .small-book{
    width: 135px;
    height: 173px;
    margin: 0 auto;
  }
  .hot-book .hot-book-on{
    height: 128px;

  }
  .hot-book .on-small-book{
    width: 79px;
    height: 102px;
  }
  .hot-book .down-small-book{
    width: 75px;
    height: 128px;
  }
  .hot-book p{
    text-align: left;
    margin: 0 auto;
    font-size: 14px;
    color: #343434;
    line-height: 1.9;
  }
  .hot-book p:nth-of-type(2){
    font-size: 12px;
    color: #656565;
  }
  .hot-book p:nth-of-type(3){
    font-size: 10px;
    color: #989898;
  }
  .hot-book .hot-book-left{
    padding: 0 16px 15px 15px;
    text-align: center;
  }
  .hot-book-left .left-p{
    padding-left: 10px;
  }
  .hot-book-on .on-p{
    padding: 40px 0 37px 15px;
  }
  .hot-book-down .down-p{
    padding: 37px 15px 36px 14px ;
  }
  .new-book{
    padding: 17px 0 17px 17px;
  }
  .new-book img{
    width: 100px;
    height: 139px;
  }
  .new-book p{
    text-align: left;
    font-size: 14px;
    color: #56A17c;
  }
  .new-book p:nth-of-type(2){
    font-size: 13px;
    color: #656565;
  }
  .new-book p:nth-of-type(3){
    font-size: 12px;
    color: #989898;
  }
  .hot-book-name{
    padding-left: -3px;
  }
</style>
