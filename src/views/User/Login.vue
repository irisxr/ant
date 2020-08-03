<template>
    <div class="loginClass">
        登录名：
        <a-input placeholder="请输入" v-model="input1"/>
        用户：
        <a-input placeholder="请输入" v-model="input2"/>
        <div>
            <a-button type="primary" @click="loginIn">登录</a-button>
        </div>
    </div>
</template>

<script>
  import request from "../../utils/request";
  import { notification } from "ant-design-vue";

  export default {
    data() {
      return {
        input1: "",
        input2: ""
      };
    },
    methods: {
      loginIn() {
        request({
          url: "http://localhost:8081/api/user/login",
          method: "get",
          params: {
            name: this.input1,
            password: this.input2
          }
        }).then(res => {
          console.log(res);
          if (res.data.code == 201 && res.data.token) {
            this.$cookies.set("token", res.data.token);
            this.$router.push({
              name: "analysis"
            });
          } else {
            notification.open({
              message: "用戶名或密码错误"
            });
          }
        });
      }
    }

  };
</script>

<style scoped>
    .loginClass {
        width: 300px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -50px 0 0 -50px;
    }
</style>