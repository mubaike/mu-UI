<template>
  <div class="app">
    <TopBar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TopBar from "./components/TopBar.vue";

</script>

<style scoped lang="less">
.app {
  margin-top: 60px;
}
</style>