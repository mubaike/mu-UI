<template>
  <div class="component-bar">
    <div class="container">
      <div class="bar-card" v-for="(item, index) in sizebar" :key="index">
        <div class="bar-title">
          <span>{{ item.title }}</span>
          <router-link
            class="bar-list"
            v-for="(item1, index1) in item.list"
            key="index1"
            :to="item1.src"
            >{{ item1.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  sizebar: {
    type: Array,
  },
});
</script>

<style scoped lang="less">
.component-bar {
  height: 100%;
  width: 268px;
  border-right: 1px solid @line-color-s;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1;
  background-color: @bg-color-l;
  .container {
    .bar-card {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>