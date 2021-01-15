<template>
  <div>
    <div class="logo">logo</div>
    <a-menu
      :default-selected-keys="[menuKey]"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed">
      <a-menu-item key="1" @click="toFile('/',1)">
        <a-icon type="pie-chart"/>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2" @click="toFile('/list',2)">
        <a-icon type="desktop"/>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3" @click="toFile('/form',3)">
        <a-icon type="inbox"/>
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
  import {setStore, getStore} from '@/utils/store';

  export default {
    name: "sidebar",
    props: ["collapsed"],
    data() {
      return {
        menuKey: getStore({name: 'menuKey'}) ? getStore({name: 'menuKey'}).toString() : '1'
      };
    },
    mounted() {
    },
    methods: {
      toFile(link, key) {
        this.$router.push({path: link});
        this.menuKey = key;
        setStore({name: 'menuKey', content: key, type: 'session'});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .logo {
    width: 100%;
    height: 64px;
    background: #ddd;
    text-align: center;
    line-height: 64px;
  }
</style>

