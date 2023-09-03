<template>
  <div class="home">
    <div class="Home-box">
      <Title>MU-UI</Title>
      <Space direction='vertical'>
          <Button long @click="kuaisu()">快速上手</Button>
          <Button long @click="gomodule()">组件</Button>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance}  from 'vue'
const { proxy }:any = getCurrentInstance()

import router from "@/router/index"


const gomodule = () => {
    router.push('/module')
}

//快速上手
const kuaisu = () => {
    proxy.$message({message: "还在制作中，敬请请期待！",type: 'warning'})
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  .Home-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>