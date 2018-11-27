<template>
<div>
  <van-row>
  <van-col span="5" class="site">
    <span>苏州</span><img src="static/icon/down.png" alt="">
  </van-col>
    <van-col span="19" class="search">
      <form action="">
      <input type="text" placeholder="搜索书籍"><button><img src="static/icon/search.png" alt=""></button>
      </form>
    </van-col>
  </van-row>
  <van-tabs v-model="active" swipeable class="label" color="#0c876d" :sticky="true">
    <van-tab title="推荐">
      <home-recommend></home-recommend>
    </van-tab>
    <van-tab title="榜单"><home-list></home-list></van-tab>
    <van-tab title="书评"><home-comment></home-comment></van-tab>
    <van-tab title="分类"><home-classify></home-classify></van-tab>
  </van-tabs>
</div>

</template>

<script>
  import recommend from './second/recommend'
  import list from './second/list'
  import classify from './second/classify'
  import comment from './second/comment'
	export default {
		name: "Home",
    data(){
		  return{
        tabbaractive: 0,
        active:0,
        activeNames:['1'],
      }
    },
    components:{
      "home-recommend":recommend,
      "home-list":list,
      "home-classify":classify,
      "home-comment":comment,
    }
	}
</script>

<style scoped>
.label .van-tab{
  font-size: 18px;
}
  .site {
    padding-left: 15px;
  }
.site span {
  line-height: 40px;
  font-size: 17px;
  color: #656565;
}
  .site img {
    width:0.8em;
    margin-left: 5px;
  }
.van-tabs__wrap::after{
  border:none;
}
  .search input{
    line-height: 32px;
    width: 230px;
    border: none;
    background-color: #f2f2f2;
    margin-top: 4px;
    padding-left: 11px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    font-size: 14px;
    vertical-align: middle ;

  }
.search input::-webkit-input-placeholder {
  color: #c8c8c8;
  font-size: 13px;
}
.search button{
  line-height: 32px;
  width: 40px;
  border: none;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f2f2f2;
  vertical-align: middle ;
  margin-top: 4px;

}
.search button img {
  width: 1em;
  /*height: 1em;*/
  transform: translateY(2px);
}
</style>
