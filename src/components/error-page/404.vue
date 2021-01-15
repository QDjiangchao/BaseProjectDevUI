<template>
  <div class="error-page">
    <img class="img" src="./404.png" alt="">
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，你访问的页面不存在</div>
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
    name: "error-404"
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
