<template>
  <div class="component-bar">
    <Container class="container">
      <div class="bar-card" v-for="(item, index) in sizebar" :key="index">
        <div class="bar-title">
          <Title :level="6">{{ (item as any).title }}</Title>
        </div>
        <router-link
            class="bar-list"
            v-for="(item1, index1) in (item as any).list"
            :key="index1"
            :to="item1.src"
            >{{ item1.name }}</router-link
          >
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { Title } from "@/mu-ui";
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
    padding: @space-s @space-m;
    height: calc(100% - 60px);
  }
  .bar-title {
    margin-top: @space-m;
    height: 40px;
    line-height: 40px;
  }

  .bar-list {
    height: 40px;
    border-radius: @radius-m;
    line-height: 40px;
    padding: 0 @space-m;
    display: block;
    color: @font-color-m;
    transition: color @animats;
  }

  .router-link-active {
    font-weight: 600;
    color: @pcolor;
    background-color: rgba(21,114,255,0.1);
  }
}
</style>