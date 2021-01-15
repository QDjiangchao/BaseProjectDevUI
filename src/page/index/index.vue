<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider class="sider" v-model="collapsed" :trigger="null" collapsible>
      <sidebar class="menu" :collapsed="collapsed"/>
    </a-layout-sider>
    <a-layout class="layout">
      <a-layout-header class="header">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="toggleCollapsed"/>
        <top/>
      </a-layout-header>
      <a-layout-content class="content">
        <div class="div">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import {setStore, getStore} from '@/utils/store';
  import top from "./top";
  import sidebar from "./sidebar/";

  export default {
    components: {
      top,
      sidebar
    },
    name: "index",
    data() {
      return {
        collapsed: false,
      };
    },
    mounted() {
      const collapsedStore = getStore({name: 'collapsed'});
      if (typeof collapsedStore === 'boolean' && (collapsedStore == true || collapsedStore == false)) {
        this.collapsed = collapsedStore;
      }
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
        setStore({name: 'collapsed', content: this.collapsed, type: 'session'});
      },
    }
  };
</script>

<style lang="scss" scoped>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  .sider {
    overflow: auto;
    height: 100vh;

    .menu {
      background: #001529;
    }
  }

  .layout {
    height: 100vh;
    display: flex;

    .header {
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 0;
    }

    .content {
      flex: 1;
      overflow: auto;
      margin: 20px;
      margin-right: 0;

      .div {
        margin-right: 20px;
        padding: 20px;
        background: #fff;
      }
    }
  }
</style>
