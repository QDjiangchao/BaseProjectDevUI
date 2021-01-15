<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import config from '@/utils/config';



  export default {
    name: 'App',
    created() {
      // this.getLogin();
    },
    methods: {
      getLogin() {
        let formData = new FormData();
        formData.append('tag', '');
        const vueThis = this;
        vueThis.$axios({
          method: 'post',
          url: '/api/business/checkLogin',
          data: formData
        }).then(function (res) {
          if (res.status === 200) {
            if (res.data.success) {
              let info = res.data.result;
              vueThis.$store.commit('setUser', info);
              config.userInfo = info;
            } else {
              config.userInfo = {};
            }
          }
        }).catch(function (error) {
          vueThis.$message({message: '网络错误，请重试', type: 'error', center: true});
        });
      },
    },
  }
</script>

<style>
  *, body {
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: normal;
    list-style: none;
  }

  option {
    font-size: 12px;
  }

  img {
    display: block;
    border: none;
  }

  .displayFlex {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .example {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
  }

  input::-webkit-input-placeholder {
    color: #aaa;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #aaa;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #aaa;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #aaa;
  }
</style>
