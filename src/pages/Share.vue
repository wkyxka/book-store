<template>
  <div>
    <van-tabs v-model="active" swipeable color="#0c876d" :sticky="true">
      <van-tab title="我要共享"></van-tab>
      <van-tab title="我要捐书"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "Share",
    data() {
      return {
       active:0,
      };
    }

  }
</script>

<style scoped>

</style>
