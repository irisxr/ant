<template>
    <div>
        <a-menu
                style="width: 256px;margin-top: 50px"
                :default-selected-keys="['dashboard']"
                mode="inline"
                :theme="theme"
                @click="handleClick"
        >
            <a-sub-menu key="dashboard" @titleClick="titleClick">
                <span slot="title"><a-icon type="dashboard" /><span>仪表盘</span></span>
                    <a-menu-item key="analysis">
                        分析页
                    </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="form" @titleClick="titleClick">
                <span slot="title"><a-icon type="form" /><span>表单</span></span>
                <a-menu-item key="basicForm">
                    基础表单
                </a-menu-item>
                <a-menu-item key="stepForm">
                    分布表单
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script>
  export default {
    props:{
      theme:{
        type:String,
        default:'dark'
      }
    },
    data() {
      return {
        openKeys: ['dashboard'],
      };
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
    methods: {
      handleClick(e) {
        let data = e.key;
        this.$emit('clickSiderMenu',data)
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    },
  };
</script>
