import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import axios from "axios";
import Vue18n from "vue-i18n";
import { Button, Layout, Icon, Drawer, Radio, Menu, Form, Input, notification } from "ant-design-vue";

Vue.config.productionTip = false;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = Vue.$cookies.get("token");
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token;  //请求头加上token
    }
    console.log("进入reqest拦截器", token);
    return config;
  },
  err => {
    return Promise.reject(err);
  });
//
axios.interceptors.response.use(res => {
  console.log("进入res拦截器", res.data);
  switch (res.data.code) {
    case -1:
      notification.open({
        message: res.data.message,
        description: "error"
      });
      break;
    // 返回-2，清除用户信息并跳转到登录页面
    case -2:
      notification.open({
        message: res.data.message,
        description: "重新登陆"
      });
      router.replace({
        path: "/user"
      });
      break;
    case 201:
      Vue.$cookies.set("token", res.data.token);
      break;
  }
  return res;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});


Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(VueCookies);
Vue.use(Vue18n);

const i18n = new Vue18n({
  locale:localStorage.lang ||'zh-CN',
  messages:{
    'zh-CN':require('./common/lang/cn'),
    'en-US':require('./common/lang/en')
  }
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
