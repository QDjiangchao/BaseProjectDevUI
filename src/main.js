// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import 'lib-flexible'
import store from './store';
// import {encrypt, decrypt, formatDate} from './utils/BaseUtils'
// import toastRegistry from './components/message/index'

import {Layout, Menu, Table, Icon, Button, Spin, Input} from 'ant-design-vue';

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Table);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Spin);
Vue.use(Input);

// Vue.prototype.$encrypt = encrypt;//加密
// Vue.prototype.$decrypt = decrypt;//解密
// Vue.prototype.$formatDate = formatDate;//格式化日期
// Vue.use(toastRegistry);//消息提示

Vue.config.productionTip = false;

Vue.use(router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
