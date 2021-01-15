<template>
  <div class="error-page">
    <img class="img" src="./403.png" alt="">
    <div class="content">
      <h1>403</h1>
      <div class="desc">抱歉，你无权访问该页面</div>
      <div class="actions">
        <router-link :to="{path:'/'}">
          <a-button type="primary">返回首页</a-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "error-403"
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
