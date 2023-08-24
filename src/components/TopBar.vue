<template>
  <div class="top-bar">
    <div class="logo" @click="goHome">
      <span class="name">MU-UI</span>
    </div>
      <Space class="net" :size="40" aline="center">
        <router-link to="/module">组件</router-link>
        <router-link to="/test">测试</router-link>
        <a href="http://mubais.love">博客</a>
      </Space>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
//页面跳转
const router = useRouter();
const goHome = () => {
    router.push({path: '/'})
}
</script>

<style scoped lang="less"> 
.top-bar {
    height: 60px;
    width: 100%;
    background-color: @bg-color-l;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 10;
    box-sizing: border-box;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid @line-color-s;

    .name {
        font-size: 18px;
        font-weight: 700;
        color: @font-color-l;
    }

    .net {
        display: flex;
        align-items: center;

        :nth-child(n){
            margin-right: 20px;
            color: @font-color-l;
            text-decoration: none;
            line-height: 60px;
        }
    }
}
</style>