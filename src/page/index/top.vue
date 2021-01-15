<template>
  <div>
    <div class="top">
      哈哈哈哈哈哈
      <a-button type="link" @click="logout">退出</a-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        collapsed: false,
      };
    },
    mounted() {
    },
    methods: {
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({path: "/login"});
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .top {
    width: 100%;
    margin-right: 20px;
  }
</style>
