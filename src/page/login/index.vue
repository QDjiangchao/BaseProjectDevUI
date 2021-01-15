<template>
  <div>
    <div class="inpBox">
      <div class="position">
        <a-input v-model="userName" placeholder="请输入账号"/>
      </div>
      <div class="position">
        <a-input-password v-model="password" placeholder="请输入密码"/>
      </div>
      <a-button type="primary" @click="login()">登录</a-button>
    </div>

    <div class="example" v-if="loadingDiv">
      <a-spin tip="Loading..." size="large"/>
    </div>
  </div>
</template>

<script>
  import config from '@/utils/config';
  import {loginFun, loginSellerFun, checkLoginFun} from '@/api/login'

  export default {
    name: "Login",
    data() {
      return {
        loadingDiv: false,
        userName: "",
        password: ""
      }
    },
    methods: {
      chackedFun(type, formData) {
        return type ? loginSellerFun(formData) : loginFun(formData);
      },
      login() {
        this.$store.dispatch("LoginByUsername").then(() => {
          this.$router.push({
            path: '/',
          });
        }).catch(() => {
          console.log('123123123123123')
        }, error => {
          this.$message.error(error);
        });

        /*this.loadingDiv = true;
        let formData = new FormData();
        formData.append('userName', this.userName);
        formData.append('passWord', this.password);
        this.chackedFun(0, formData).then(res => {
          this.loadingDiv = false;
          if (res.status == 200) {
            if (res.data.success) {
              this.getLogin();
            } else {
              this.$message({message: res.data.error, type: 'error', center: true});
            }
          }
        }, error => {
          this.loadingDiv = false;
          this.$message({message: '网络错误，请重试', type: 'error', center: true});
        })*/
      },
      getLogin() {
        this.loadingDiv = true;
        let formData = new FormData();
        formData.append('tag', '');
        checkLoginFun(formData).then(res => {
          this.loadingDiv = false;
          if (res.status === 200) {
            if (res.data.success) {
              let info = res.data.result;
              config.userInfo = info;
              this.$router.push({path: '/workbench'});
            }
          }
        }, error => {
          this.loadingDiv = false;
          this.$message({message: '网络错误，请重试', type: 'error', center: true});
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .inpBox {
    width: 400px;
    height: 300px;
    /*margin: 0 auto;*/
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    box-shadow: 0 0 10px #ddd;

    .position {
      width: 70%;
      margin: 0 auto;
      margin-top: 20px;
    }

    button {
      width: 70%;
      height: 30px;
      margin-top: 20px;
      font-size: 14px;
    }
  }
</style>
