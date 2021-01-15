<template>
  <div>
    <div class="header">重置密码</div>
    <div class="contentAuto">
      <div class="resInfo">
        <div style="background:#fff;">
          <label>登录账号</label>
          <input v-model.trim="phone" @blur="phoneChangeHandle" type="text" placeholder="请输入登录手机号"/>
        </div>
        <div style="background:#fff;">
          <label>图形验证码</label>
          <input v-model.trim="captchaAnswer" style="width:32vw;" type="text" placeholder="请输入"/>
          <img @click="getImage" style="width:24vw;height:5vh;" :src="captchaImage" alt="">
        </div>
        <div style="background:#fff;">
          <label>验证码</label>
          <input v-model.trim="verificationCode" style="width:32vw;" type="text" placeholder="请输入"/>
          <button @click="getVerification" :disabled="!disabledCodeBtn" class="huoquBtn" type="button">{{text}}</button>
        </div>
        <div style="background:#fff;">
          <label>设置密码</label>
          <input v-model="password" type="password" autocomplete="new-password" placeholder="请设置密码"/>
        </div>
        <p style="width:86vw;margin:1vh auto;color:#999;">密码由6-20位英文字母、数字或符号组成</p>
        <div style="background:#fff;">
          <label>确认密码</label>
          <input v-model="passwordAgain" type="password" autocomplete="new-password" placeholder="请确认密码"/>
        </div>

        <div class="lijibangding">
          <button @click="register" type="button">重置密码</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {validatePhone, checkPasswordBase, checkRepeat, checkSerial} from '../../utils/BaseUtils'

  export default {
    name: "ForgetPassword",
    data() {
      return {
        captchaImage: '',
        captchaToken: '',
        text: '获取验证码',
        disabledCodeBtn: true,

        phone: '',//登录账号
        captchaAnswer: '',//图片验证码
        verificationCode: '',//短信验证码
        password: '',//密码
        passwordAgain: '',
      }
    },
    created() {
      this.getImage();
    },
    methods: {
      //手机号或邮箱验证
      phoneChangeHandle() {
        if (!validatePhone(this.phone)) {
          this.$message({message: '注册手机格式有误', type: 'error', center: true});
          return false;
        }
      },
      // 获取图片验证码
      getImage() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.8)'
        });
        const vueThis = this;
        vueThis.$axios({
          method: 'get',
          url: '/api/uuc/getCaptcha',
        }).then(function (res) {
          loading.close();
          if (res.status === 200) {
            vueThis.captchaImage = res.data.captcha_image;
            vueThis.captchaToken = res.data.captcha_token;
          }
        }).catch(function (error) {
          loading.close();
          vueThis.$message({message: '网络错误，请重试', type: 'error', center: true});
        });
      },

      //获取验证码
      getVerification() {
        if (this.phone.length == 0) {
          this.$message({message: '请输入登录账号', type: 'warning', center: true});
          return false;
        }
        if (!validatePhone(this.phone)) {
          this.$message({message: '注册手机格式有误', type: 'error', center: true});
          return false;
        }
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.8)'
        });
        let formData = new FormData();
        formData.append('phone', this.phone);
        formData.append('scenario', 'registration');
        formData.append('captchaToken', this.captchaToken);
        formData.append('captchaAnswer', this.captchaAnswer);
        const vueThis = this;
        vueThis.$axios({
          method: 'post',
          url: '/api/uuc/getPhoneMesCode',
          data: formData
        }).then((res) => {
          loading.close();
          if (res.status == 200) {
            if (res.data.success) {
              this.$message({message: "发送成功", type: "success", center: true,});
              this.resend(60);
            } else {
              vueThis.$message({message: res.data.error, type: 'error', center: true});
            }
          }
        }).catch((error) => {
          loading.close();
          vueThis.$message({message: '网络错误，请重试', type: 'error', center: true});
        });
      },

      //注册
      register() {
        //校验
        let check = this.checkContent();
        if (!check) {
          return false;
        }
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.8)'
        });
        let formData = new FormData();
        formData.append('userName', this.phone);
        formData.append('tuxing', this.phone);
        formData.append('captchaAnswer', this.captchaAnswer);
        formData.append('captcha', this.verificationCode);
        formData.append('password', this.password);
        formData.append('rePassword', this.passwordAgain);
        formData.append('providerId', 'weixin');

        const vueThis = this;
        vueThis.$axios({
          method: 'post',
          url: '/api/business/register',
          data: formData
        }).then(function (res) {
          loading.close();
          if (res.status === 200) {
            if (res.data.success) {
              vueThis.$router.push({path: '/register'});
            } else {
              vueThis.$message({message: res.data.error, type: 'error', center: true});
            }
          }
        }).catch(function (error) {
          loading.close();
          vueThis.$message({message: '网络错误，请重试', type: 'error', center: true});
        });
      },

      //验证码秒数
      resend(time) {
        if (time === 0) {
          this.disabledCodeBtn = true;
          this.text = "获取验证码";
          return false;
        } else {
          this.disabledCodeBtn = false;
          this.text = '重新发送(' + time + ')';
          time--;
        }
        setTimeout(() => {
          this.resend(time);
        }, 1000)
      },

      //检查密码是否一致，是否符合校验规则
      checkPassword() {
        if (!this.password.length) {
          this.$message({message: '请填写密码！', type: 'error', center: true});
          return false;
        }
        if (!this.passwordAgain.length) {
          this.$message({message: '请填写确认密码！', type: 'error', center: true});
          return false;
        }
        if (this.password != this.passwordAgain) {
          this.$message({message: '两次输入的密码不一致！', type: 'error', center: true});
          return false;
        }
        if (this.password.length > 16 || this.password.length < 8) {
          this.$message({message: '密码由8-16位，小写字母、大写字母、数字、特殊符号的两种及以上组合！', type: 'error', center: true});
          return false;
        }
        if (!checkPasswordBase(this.password)) {
          this.$message({message: '密码由8-16位，小写字母、大写字母、数字、特殊符号的两种及以上组合！', type: 'error', center: true});
          return false;
        }
        if (!checkRepeat(this.password)) {
          this.$message({message: '不能包含6位及以上相同的字符！', type: 'error', center: true});
          return false;
        }
        if (!checkSerial(this.password)) {
          this.$message({message: '不能包含6位及以上连续的字符！', type: 'error', center: true});
          return false;
        }
        return true;
      },

      //检查所有字段是否为空和格式校验
      checkContent() {
        if (!this.phone.length) {
          this.$message({message: '请填写注册手机号！', type: 'error', center: true});
          return false;
        }
        if (!validatePhone(this.phone)) {
          this.$message({message: '注册手机格式有误！', type: 'error', center: true});
          return false;
        }
        if (this.phone.length > 150) {
          this.$message({message: '注册手机最大长度为150字符！', type: 'error', center: true});
          return false;
        }
        if (!this.captchaAnswer.length || !this.verificationCode.length) {
          this.$message({message: '请填写验证信息！', type: 'error', center: true});
          return false;
        }
        let check = this.checkPassword();
        if (!check) {
          return false;
        }
        return true;
      },
    },
  }
</script>

<style scoped lang="scss">
  .header {
    text-align: center;
    line-height: 6vh;
    color: #444;
    font-size: 5vw;
  }

  .contentAuto {
    height: 94vh;
    background: #f2f2f2;
  }

  .resInfo > div {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 2vw;
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 1.5vh;
  }

  .resInfo > div > label {
    width: 26vw;
  }

  .resInfo {
    padding-top: 5vh;
    div {
      label {
        line-height: 6vh;
        font-size: 4vw;
        color: #666;

        span {
          margin-right: 1vw;
        }
      }

      input {
        width: 58vw;
        height: 6vh;
        font-size: 4vw;
        color: #666;
        border: none;
      }

      input::-webkit-input-placeholder {
        color: #ccc;
      }

      input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #ccc;
      }

      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #ccc;
      }

      input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ccc;
      }
    }

    .huoquBtn {
      width: 24vw;
      height: 5vh;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
    }

    .lijibangding {
      width: 90vw;
      padding: 0;
      border: none;
      margin: 0 auto;
      margin-top: 6vh;

      button {
        width: 100%;
        line-height: 5.5vh;
        background: #003c8d;
        border: none;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
</style>
