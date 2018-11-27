
<template>
  <div class="main">
        <van-row type="flex" justify="center" class="overrall" v-for="(item,index) in review" :key="index">
          <van-col span="24" class="first">
            <van-col span="5" class="userphoto"><img :src="item.img"></van-col>
            <van-col span="5" offset="1" class="user">
              <p>{{item.username}}</p>
              <p>{{item.time}}</p>
            </van-col>
            <van-col span="24" class="gnosis"><span>{{item.gnosis}}</span></van-col>
            <van-col span="24" class="book">
              <van-col span="6" class="image"><img :src="item.image"></van-col>
              <van-col span="8" offset="1" class="book-text">
                <p>{{item.bookname}}</p>
                <p>{{item.author}}</p>
              </van-col>
            </van-col>
            <van-col span="24" class="ico">
              <van-col span="6" class="browse">{{item.browse}}</van-col>
              <van-col span="1" class="zan" offset="11"><img :src="item.zan"></van-col>
              <van-col span="1">{{item.zannumber}}</van-col>
              <van-col span="1" class="message" offset="2"><img :src="item.message"></van-col>
              <van-col span="1">{{item.messages}}</van-col>
            </van-col>
          </van-col>
        </van-row>
  </div>

</template>

<script>
  export default {
    name:"Share",
    data(){
      return {
        active:0,
        review:[
          {id:1,img:'static/reviews/xuzhimo.png',username:'克鲁克山',time:'今天20:20',gnosis:'《老人与海》是一本能让人了解什么才是真正的人生，' +
            '什么才是坚强的书.一本实实在在的书.在现实生活中,我们会不断地受到挫折,失败,还有许多负面的情绪,很多人因此而消极,失去对生活的热爱' +
            '.而《老人与海》却刻画出一个与大海搏斗,在艰难的环境下...',image:'static/image/icon/1.png',bookname:'《老人与海》',author:'作者:海明威',
            browse:'2018次浏览',zan:'static/image/icon/4.png',zannumber:'520', message:'static/image/icon/6.png',messages:'520'},
          {id:1,img:'static/reviews/xuzhimo.png',username:'克鲁克山',time:'今天20:20',gnosis:'《老人与海》是一本能让人了解什么才是真正的人生，' +
            '什么才是坚强的书.一本实实在在的书.在现实生活中,我们会不断地受到挫折,失败,还有许多负面的情绪,很多人因此而消极,失去对生活的热爱' +
            '.而《老人与海》却刻画出一个与大海搏斗,在艰难的环境下...',image:'static/image/icon/1.png',bookname:'《老人与海》',author:'作者:海明威',
            browse:'2018次浏览',zan:'static/image/icon/4.png',zannumber:'520', message:'static/image/icon/6.png',messages:'520'},
          {id:1,img:'static/reviews/xuzhimo.png',username:'克鲁克山',time:'今天20:20',gnosis:'《老人与海》是一本能让人了解什么才是真正的人生，' +
            '什么才是坚强的书.一本实实在在的书.在现实生活中,我们会不断地受到挫折,失败,还有许多负面的情绪,很多人因此而消极,失去对生活的热爱' +
            '.而《老人与海》却刻画出一个与大海搏斗,在艰难的环境下...',image:'static/image/icon/1.png',bookname:'《老人与海》',author:'作者:海明威',
            browse:'2018次浏览',zan:'static/image/icon/4.png',zannumber:'520', message:'static/image/icon/6.png',messages:'520'}
        ]
      }
    }
  }
</script>

<style scoped>
  .overrall{
    padding-left: 15px;
    padding-right: 15px;
  }
  img{
    width: 100%;

  }
  .userphoto{
    width: 40px;
    height: 40px;
    text-align: center;
    margin-top: 22px;
  }
  .first{
    border-top: 1px solid #f2f2f2;
  }
  .user{
    padding-top: 22px;
  }
  .image{
    width: 34px;
    height: 59px;
  }
  .zan{
    width: 16px;
    height: 14px;
    margin-right: 2px;
  }
  .message{
    width: 14px;
    height: 13px;
    margin-right: 2px;

  }
  .book{
    margin-top: 19px;
    padding: 13px 0 13px 20px;
    background: #f2f2f2;
  }
  .book-text{
    padding-top: 12px;
  }
  .ico{
    color: #656565;
    font-size: 14px;
    padding: 24px 0 24px 0;
  }

  .browse{
    font-size: 13px;
    color: #989898;

  }
  p{
    text-align: left;
    font-size: 16px;
    color: #343434;
    margin: 0;
    line-height: 1.5;
  }
  p:nth-of-type(2){
    font-size: 12px;
    color: #656565;
  }

  p:nth-of-type(3){
    font-size: 14px;
    color: #656565;
  }
  p:nth-of-type(4){
    font-size: 13px;
    color: #989898;
  }
  .gnosis{
    margin-top: 17px;
    font-size: 14px;
    color: #343434;
    line-height: 1.5;
    height: 103px;
    text-align: left;
    /*max-height: 103px;*/
    /*overflow: hidden;*/
    /*text-overflow:ellipsis;*/
    /*white-space: nowrap;*/

  }
</style>
