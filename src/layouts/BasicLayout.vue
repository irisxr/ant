<template>
    <div :class="[`nav-theme-${navTheme}`,`nav-layout-${navLayout}`]">
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider
                    v-if="navLayout=='left'"
                    :theme="navTheme"
                    style="width: 256px;max-width: 256px;min-width: 256px;"
                    v-model="collapsed"
                    collapsible
                    :trigger="null">
                <div class="logo">
                    Ant design vue pro
                </div>
                <SiderView :theme="navTheme"   @clickSiderMenu="clickSiderMenu"></SiderView>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon :type="collapsed?'menu-unfold':'menu-fold'" @click="collapsed=!collapsed" class="trigger">
                    </a-icon>
                    <Header></Header>
                </a-layout-header>
                <a-layout-content style="margin: 0 16px">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    <Footer></Footer>
                </a-layout-footer>
            </a-layout>
        </a-layout>
        <SettingDrawer></SettingDrawer>
    </div>
</template>

<script>
  import Header from "./Header";
  import SiderView from "./SiderView";
  import Footer from "./Footer";
  import SettingDrawer from "../components/SettingDrawer";

  export default {
    name: "BasicLayout.vue",
    data() {
      return {
        collapsed: false
      };
    },
    computed: {
      navTheme() {
        return this.$route.query.navTheme || "dark";
      },
      navLayout() {
        return this.$route.query.navLayout || "left";
      }
    },
    components: {
      Header,
      SiderView,
      Footer,
      SettingDrawer
    },
    methods: {
      clickSiderMenu(data) {
        if(data=="analysis"){
          this.$router.push({
            name:'analysis'
          })
        }else if(data=="basicForm"){
          this.$router.push({
            name:'basicform'
          })
        }else if(data=="stepForm"){
          this.$router.push({
            name:'info'
          })
        }
      }
    }
  };
</script>

<style scoped>
    .trigger {
        padding: 0 20px;
        font-size: 30px;
        line-height: 64px;
    }

    .trigger:hover {
        background-color: #eeeeee;
    }

    .logo {
        text-align: center;
    }

    .nav-theme-dark >>> .logo {
        color: #ffffff
    }
</style>